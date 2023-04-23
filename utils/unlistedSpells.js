const unlistedSpellData = [
	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Wrathful Smite',
		"desc": [
			"The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Witch Bolt',
		"desc": [
			"A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
		],
		"range": "30 Feet",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Tsunami',
		"desc": [
			"A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.",
			"When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save.",
			"At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.",
			"A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground."
		],
		"range": "Sight",
		"duration": "Concentration, up to 6 rounds",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Thunderous Smite',
		"desc": [
			"The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "transmutation",
			"name": "Transmutation"
		},
		"name": 'Thorn Whip',
		"desc": [
			"You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.",
			"This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
		],
		"range": "30 feet",
		"duration": "Instantaneous",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Telepathy',
		"desc": [
			"You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.",
			"Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it."
		],
		"range": "Unlimited",
		"duration": "24 hours",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "transmutation",
			"name": "Transmutation"
		},
		"name": 'Swift Quiver',
		"desc": [
			"You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it.",
			"On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends."
		],
		"range": "Touch",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Staggering Smite',
		"desc": [
			"The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Searing Smite',
		"desc": [
			"The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot level above 1st."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "necromancy",
			"name": "Necromancy"
		},
		"name": 'Ray of Sickness',
		"desc": [
			"A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
		],
		"range": "60 feet",
		"duration": "Instantaneous",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Power Word Heal',
		"desc": [
			"A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs."
		],
		"range": "Touch",
		"duration": "Instantaneous",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "illusion",
			"name": "Illusion"
		},
		"name": 'Phantasmal Force',
		"desc": [
			"You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.",
			"The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.",
			"The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.",
			"While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall—it was pushed, it slipped, or a strong wind might have knocked it off.",
			"An affected target is so convinced of the phantasm's reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion."
		],
		"range": "60 feet",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "transmutation",
			"name": "Transmutation"
		},
		"name": 'Lightning Arrow',
		"desc": [
			"The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage.",
			"Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one.",
			"The piece of ammunition or weapon then returns to its normal form.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Hunger of Hadar',
		"desc": [
			"You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point within range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded.",
			"The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it."
		],
		"range": "150 feet",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "enchantment",
			"name": "Enchantmnet"
		},
		"name": 'Hex',
		"desc": [
			"You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.",
			"If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.",
			"A remove curse cast on the target ends this spell early.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
		],
		"range": "90 feet",
		"duration": "Concentration, up to 1 hour",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Hail of Thorns',
		"desc": [
			"The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.",
			"**At Higher Levels**. If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10)."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Grasping Vine',
		"desc": [
			"You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine.",
			"Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns."
		],
		"range": "30 feet",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "enchantment",
			"name": "Enchantment"
		},
		"name": 'Friends',
		"desc": [
			"For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["S", "M"]
	},

	{
		"school": {
			"index": "necromancy",
			"name": "Necromancy"
		},
		"name": 'Feign Death',
		"desc": [
			"You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.",
			"For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends.",
		],
		"range": "Touch",
		"duration": "1 hour",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Ensnaring Strike',
		"desc": [
			"The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.",
			"While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.",
			"**At Higher Levels**. If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "transmutation",
			"name": "Transmutation"
		},
		"name": 'Elemental Weapon',
		"desc": [
			"A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
		],
		"range": "Touch",
		"duration": "Concentration, up to 1 hour",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "enchantment",
			"name": "Enchantment"
		},
		"name": 'Dissonant Whispers',
		"desc": [
			"You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
		],
		"range": "60 feet",
		"duration": "Instantaneous",
		"components": ["V"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Destructive Wave',
		"desc": [
			"You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone."
		],
		"range": "Self (30-foot radius)",
		"duration": "Instantaneous",
		"components": ["V"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Crusaders Mantle',
		"desc": [
			"Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
		],
		"range": "Self (30-foot radius)",
		"duration": "Concentraion, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "enchantment",
			"name": "Enchantment"
		},
		"name": 'Crown of Madness',
		"desc": [
			"One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.",
			"The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach.",
			"On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."
		],
		"range": "120 feet",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "transmutation",
			"name": "Transmutation"
		},
		"name": 'Cordon of Arrows',
		"desc": [
			"You plant four pieces of nonmagical ammunition—arrows or crossbow bolts—in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains.",
			"When you cast this spell, you can designate any creatures you choose, and the spell ignores them.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd."
		],
		"range": "5 feet",
		"duration": "8 hours",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Conjure Volley',
		"desc": [
			"You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius, 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."
		],
		"range": "150 feet",
		"duration": "Instantaneous",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Conjure Barrage',
		"desc": [
			"You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
		],
		"range": "Self (60-foot cone)",
		"duration": "Instantaneous",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "enchantment",
			"name": "Enchantment"
		},
		"name": 'Compelled Duel',
		"desc": [
			"You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn.",
			"The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."
		],
		"range": "30 feet",
		"duration": "Concentration, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "abjuration",
			"name": "Abjuration"
		},
		"name": 'Circle of Power',
		"desc": [
			"Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw."
		],
		"range": "Self (30-foot radius)",
		"duration": "Concentration, up to 10 minutes",
		"components": ["V"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Chromatic Orb',
		"desc": [
			"You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
		],
		"range": "90 Feet",
		"duration": "Instantaneous",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Blinding Smite',
		"desc": [
			"The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon flares with bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.",
			"A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
		],
		"range": "Self",
		"duration": "Concentrain, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "abjuration",
			"name": "Abjuration"
		},
		"name": 'Blade Ward',
		"desc": [
			"You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
		],
		"range": "Self",
		"duration": "1 Round",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "necromancy",
			"name": "Necromancy"
		},
		"name": 'Bestow Curse',
		"desc": [
			"You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:",
			"Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.",
			"While cursed, the target has disadvantage on attack rolls against you.",
			"While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.",
			"While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.",
			"A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.",
			"**At Higher Levels**. If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration."
		],
		"range": "Touch",
		"duration": "Concentration, up to 1 minute",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "divination",
			"name": "Divination"
		},
		"name": 'Beast Sense',
		"desc": [
			"You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beast's senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings."
		],
		"range": "Touch",
		"duration": "Concentration, up to 1 hour",
		"components": ["S"]
	},

	{
		"school": {
			"index": "abjuration",
			"name": "Abjuration"
		},
		"name": 'Banishing Smite',
		"desc": [
			"The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied."
		],
		"range": "Self",
		"duration": "Concentration, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "evocation",
			"name": "Evocation"
		},
		"name": 'Aura of Vitality',
		"desc": [
			"Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
		],
		"range": "Self (30 ft radius)",
		"duration": "Concentration, up to 1 minute",
		"components": ["V"]
	},

	{
		"school": {
			"index": "abjuration",
			"name": "Abjuration"
		},
		"name": 'Aura of Purity',
		"desc": [
			"Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned."
		],
		"range": "Self (30 ft radius)",
		"duration": "Concentration, up to 10 minutes",
		"components": ["V"]
	},

	{
		"school": {
			"index": "abjuration",
			"name": "Abjuration"
		},
		"name": 'Aura of Life',
		"desc": [
			"Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."
		],
		"range": "Self (30 ft radius)",
		"duration": "Concentration, up to 10 minutes",
		"components": ["V"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Arms of Hadar',
		"desc": [
			"You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
		],
		"range": "Self (10 ft radius)",
		"duration": "Instantaneous",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "abjuration",
			"name": "Abjuration"
		},
		"name": 'Armor of Agathys',
		"desc": [
			"A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.",
			"**At Higher Levels**. When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st."
		],
		"range": "Self",
		"duration": "1 hour",
		"components": ["V", "S", "M"]
	},

	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Arcane Gate',
		"desc": [
			"You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.",
			"The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal.",
			"Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
		],
		"range": "500 feet",
		"duration": "Concentraion, up to 10 minutes",
		"components": ["V", "S"]
	},

	{
		"school": {
			"index": "bard",
			"name": "Bard"
		},
		"index": "bardic-inspiration-d6",
		"name": "Bardic Inspiration",
		"level": 1,
		"prerequisites": [],
		"desc": [
			"You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
			"You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
			"Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
		],
		"range": "60 feet",
		"duration": "10 minutes",
		"components": ["None"]
	},
	{
		"school": {
			"index": "conjuration",
			"name": "Conjuration"
		},
		"name": 'Cloud of Daggers',
		"desc": [
			"You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there.",
			"At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd."
		],
		"range": "60 feet",
		"duration": "Concentraion, up to 1 minute",
		"components": ["V", "S", "M"]
	},
]

module.exports = unlistedSpellData;