import { Args } from "grimoire-kolmafia";
import { getClanName, print } from "kolmafia";
import { $item, $items, SlimeTube } from "libram";

const args = Args.create("distro", "A script for AltEnd to distribute his tubes", {
  slimeling: Args.string({
    key: "slimeling",
    default: "Phreddrickkv2",
  }),
  skills: Args.string({
    key: "skills",
    default: "AltEnd",
  }),
  others: Args.string({
    key: "others",
    default: "AltEnd",
  }),
});

export function main(argstring = ""): void {
  Args.fill(args, argstring);
  print(
    `Distributing tubes of clan ${getClanName()}; sending any slimeling to ${
      args.slimeling
    }, any skills to ${args.skills}, and everything else to ${args.others}`
  );

  SlimeTube.distribute(args.slimeling, $item`squirming Slime larva`, true);
  SlimeTube.distribute(
    args.skills,
    $items`slime-soaked sweat gland, slime-soaked hypophysis, slime-soaked brain`,
    true
  );
  SlimeTube.distribute(args.others, SlimeTube.findLoot(), true);
}
