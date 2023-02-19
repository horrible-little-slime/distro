import { CombatStrategy, Engine, Task } from "grimoire-kolmafia";
import {
  abort,
  cliExecute,
  closetAmount,
  displayAmount,
  itemAmount,
  myHp,
  myId,
  myMaxhp,
  myName,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  Clan,
  Counter,
  get,
  have,
  Macro,
  set,
} from "libram";

const CLANS = [
  "Collaborative Dungeon Central",
  "Collaborative Dungeon Running 1",
  "Collaborative Dungeon Running 2",
];

const TUBE_MESSAGES = [
  `${myName()} (#${myId()}) defeated a Slime Tube monster`,
  `${myName()} (#${myId()}) was defeated by a Slime Tube monster`,
  `${myName()} (#${myId()}) squeezed a Slime gall bladder`,
];

class TubeEngine extends Engine<never, Task> {}

const TASKS: Task[] = [
  {
    name: "Beaten Up",
    completed: () => !have($effect`Beaten Up`),
    do: () => {
      if (!get("lastCombatWon")) abort();
      useSkill($skill`Tongue of the Walrus`);
    },
  },
  {
    name: "Wipe Slime",
    completed: () => !have($effect`Coated in Slime`),
    ready: () => !have($effect`Coated in Slime`, 10),
    do: (): void => {
      visitUrl("clan_slimetube.php?action=chamois");
      if (have($effect`Coated in Slime`)) cliExecute("hottub");
      if (have($effect`Coated in Slime`)) abort();
    },
  },
  {
    name: "Heal",
    completed: () => myHp() >= myMaxhp(),
    do: () => useSkill($skill`Cannelloni Cocoon`),
  },
  {
    name: "Digitize",
    completed: () => Counter.get("Digitize") === Infinity,
    ready: () => Counter.get("Digitize") <= 0,
    do: $location`Noob Cave`,
    outfit: () => ({
      modifier: ["meat"],
      familiar: $familiar`Robortender`,
    }),
    combat: new CombatStrategy().autoattack(
      Macro.skill($skill`Sing Along`)
        .attack()
        .repeat()
    ),
  },
  {
    name: "Tubeventure",
    completed: (): boolean => {
      const pageText = visitUrl("clan_raidlogs.php");
      return TUBE_MESSAGES.some((message) => pageText.includes(message));
    },
    do: $location`The Slime Tube`,
    outfit: () => ({
      modifier: ["-ML"],
      familiar: $familiar`Left-Hand Man`,
      shirt: $item`Jurassic Parka`,
      weapon: $item`June cleaver`,
      modes: { parka: "dilophosaur" },
    }),
    combat: new CombatStrategy().autoattack(
      Macro.trySkill($skill`Spit jurassic acid`)
        .attack()
        .repeat()
    ),
    choices: {
      1468: 2,
      1473: 1,
      1469: 3,
      1474: 2,
      1475: 1,
      1471: 1,
      1467: 3,
      1472: 2,
      1470: 2,
      337: 2,
    },
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function main(_sender: string, message: string, _channel: string): void {
  if (
    itemAmount($item`squirming Slime larva`) +
      displayAmount($item`squirming Slime larva`) +
      closetAmount($item`squirming Slime larva`) +
      3 >=
    690
  ) {
    set("chatbotScript", "");
    return;
  }
  if (message.includes("New message received from AltEnd")) {
    for (const clan of CLANS) {
      Clan.join(clan);
      const engine = new TubeEngine(TASKS);
      try {
        engine.run();
      } finally {
        engine.destruct();
      }
    }
  }
}
