import { Args } from "grimoire-kolmafia";
import { getClanName, myId, myName, print } from "kolmafia";
import { $item, $items, getPlayerFromIdOrName, Player, SlimeTube } from "libram";

function parsePlayer(input: string): Player {
  const isPlayerId = !/[^\d]/.test(input);
  const parsedIdOrName = isPlayerId ? parseInt(input) : input;
  return getPlayerFromIdOrName(parsedIdOrName);
}

const args = Args.create("distro", "A script for AltEnd to distribute his tubes", {
  slimeling: Args.custom<Player>(
    {
      key: "slimeling",
      default: { name: "Phreddrickkv2", id: 1515124 },
    },
    parsePlayer,
    "Player"
  ),
  skills: Args.custom<Player>(
    {
      key: "skills",
      default: { name: myName(), id: parseInt(myId()) },
    },
    parsePlayer,
    "Player"
  ),
  others: Args.custom<Player>(
    {
      key: "others",
      default: { name: myName(), id: parseInt(myId()) },
    },
    parsePlayer,
    "Player"
  ),
});

export function main(argstring = ""): void {
  Args.fill(args, argstring);
  print(
    `Distributing tubes of clan ${getClanName()}; sending any slimeling to ${
      args.slimeling
    }, any skills to ${args.skills}, and everything else to ${args.others}`
  );

  SlimeTube.distribute(args.slimeling.name, $item`squirming Slime larva`, true);
  SlimeTube.distribute(
    args.skills.name,
    $items`slime-soaked sweat gland, slime-soaked hypophysis, slime-soaked brain`,
    true
  );
  SlimeTube.distribute(args.others.name, SlimeTube.findLoot(), true);
}
