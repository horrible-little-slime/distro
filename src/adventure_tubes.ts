import { CombatStrategy, Engine, Task } from "grimoire-kolmafia";
import { abort, cliExecute, myHp, myMaxhp, useSkill, visitUrl, xpath } from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, Clan, Counter, have, Macro } from "libram";

const CLANS = [
  "Collaborative Dungeon Central",
  "Collaborative Dungeon Running 1",
  "Collaborative Dungeon Running 2",
];

class TubeEngine extends Engine<never, Task> {}

const TASKS: Task[] = [
  {
    name: "Wipe Slime",
    completed: () => !have($effect`Coated in Slime`),
    ready: () => !have($effect`Coated in Slime`, 6),
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
    completed: () =>
      !xpath(
        visitUrl("clan_raidlogs.php"),
        "/html/body/center/table/tbody/tr[2]/td/center/table/tbody/tr/td/div[3]/center/p/table/tbody/tr/td/blockquote"
      ).some((line) => /phreddrickkv2/i.test(line)),
    do: $location`The Slime Tube`,
    outfit: () => ({
      modifier: ["-ML"],
      familiar: $familiar`Left-Hand Man`,
      shirt: $item`Jurassic Parka`,
      modes: { parka: "dilophosaur" },
    }),
    combat: new CombatStrategy().autoattack(
      Macro.trySkill($skill`Spit jurassic acid`)
        .attack()
        .repeat()
    ),
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function main(_sender: string, message: string, _channel: string): void {
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