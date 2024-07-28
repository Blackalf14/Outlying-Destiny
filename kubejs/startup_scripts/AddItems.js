StartupEvents.registry('item', event => {

  event.create('iron_fragment').tooltip("Your very first source of iron")
  event.create('twilight_powder').displayName("Powder of Twilight")
  event.create('token_twilight').displayName("Token of Twilight")
  event.create('your_soul').displayName("Your Soul?")
  event.create('freed_soul').displayName("Freed Soul")
  event.create('enriched_rose_gold').displayName("Enriched Rose Gold")
  event.create('enriched_platinum').displayName("Enriched Platinum")
  event.create('enriched_shellite').displayName("Enriched Shellite")
  event.create('empowered_energized_steel').displayName('Empowered Energized Steel').glow(true)
  event.create('empowered_blazing_crystal').displayName('Empowered Blazing Crystal Mix').glow(true)
  event.create('empowered_niotic_crystal').displayName('Empowered Niotic Crystal').glow(true)
  event.create('empowered_spirited_crystal').displayName('Empowered Spirited Crystal').glow(true)
  event.create('empowered_nitro_crystal').displayName('Empowered Nitro Crystal').glow(true)
  event.create('demon_ingot').displayName('Demon Ingot').fireResistant(true)
  event.create('enchanted_ingot').displayName('Enchanted Ingot')
  event.create('evil_infused_ingot').displayName('Evil Infused Ingot')
  event.create('evil_infused_sword', 'sword').displayName('Evil Infused Sword').tier('evil_infused')
  event.create('evil_infused_pickaxe', 'pickaxe').displayName('Evil Infused Pickaxe').tier('evil_infused')
  event.create('evil_infused_axe', 'axe').displayName('Evil Infused Axe').tier('evil_infused')
  event.create('evil_infused_shovel', 'shovel').displayName('Evil Infused Shovel').tier('evil_infused')
  event.create('evil_infused_hoe', 'hoe').displayName('Evil Infused Hoe').tier('evil_infused')
  event.create('demon_sword', 'sword').displayName('Demon Sword').tier('demon')
  event.create('demon_pickaxe', 'pickaxe').displayName('Demon Pickaxe').tier('demon')
  event.create('demon_axe', 'axe').displayName('Demon Axe').tier('demon')
  event.create('demon_shovel', 'shovel').displayName('Demon Shovel').tier('demon')
  event.create('demon_hoe', 'hoe').displayName('Demon Hoe').tier('demon')
  event.create('neptune_ingot').displayName('Neptune Ingot')
  event.create('valkyrie_ingot').displayName('Valkyrie Ingot')
  event.create('phoenix_ingot').displayName('Phoenix Ingot')
  event.create('base_core').displayName('Base Core')
  event.create('enchanted_core').displayName('Enchanted Core')
  event.create('frozen_core').displayName('Frozen Core')
  event.create('infusing_soul_ingot').displayName('Infusing Soul Ingot')
  //event.create('red_gear').displayName('Red Alloy Gear')
  event.create('dark_steel_shears', 'shears').displayName('Dark Steel Shears').maxDamage(952)
  event.create('thruster_conductive_iron').displayName('Conductive Iron Thruster')
  event.create('thruster_electrical_steel').displayName('Electrical Steel Thruster')
  event.create('thruster_energetic').displayName('Energetic Thruster')
  event.create('thruster_vibrant').displayName('Vibrant Thruster')
  event.create('thruster_dark_soularium').displayName('Dark Soularium Thruster')
  event.create('thruster_leadstone').displayName('Leadstone Thruster')
  event.create('thruster_hardened').displayName('Hardened Thruster')
  event.create('thruster_reinforced').displayName('Reinforced Thruster')
  event.create('thruster_resonant').displayName('Resonant Thruster')
  event.create('thruster_fluxed').displayName('Fluxed Thruster')
  event.create('thruster_creative').displayName('Creative Thruster')
  event.create('dark_soularium_ingot').displayName('Dark Soularium Ingot').glow(true)
  event.create('crystalline_alloy_ingot').displayName('Crystalline Alloy Ingot')
  event.create('crystalline_pink_slime_ingot').displayName('Crystalline Pink Slime Ingot')
  event.create('infinity_gear').displayName('Infinity Bimetal Gear')
  event.create('void_infused_dye_blend').displayName('Void Infused Dye Blend')
  event.create('soul_attuned_dye_blend').displayName('Soul Attuned Dye Blend')
  event.create('zombie_soul_vial').displayName('Zombie Soul Vial').texture('enderio:item/filled_soul_vial').maxStackSize(1).glow(true).tag('outlying:soul_vial')
  event.create('witch_soul_vial').displayName('Witch Soul Vial').texture('enderio:item/filled_soul_vial').maxStackSize(1).glow(true).tag('outlying:soul_vial')
  event.create('enderman_soul_vial').displayName('Enderman Soul Vial').texture('enderio:item/filled_soul_vial').maxStackSize(1).glow(true).tag('outlying:soul_vial')
  event.create('shulker_soul_vial').displayName('Shulker Soul Vial').texture('enderio:item/filled_soul_vial').maxStackSize(1).glow(true).tag('outlying:soul_vial')
  event.create('machinarium_ingot').displayName('Machinarium Ingot')

  //Rods
  event.create('dark_steel_rod').displayName('Dark Steel Rod')
  event.create('end_steel_rod').displayName('End Steel Rod')
  event.create('invar_rod').displayName('Invar Rod')

  //Wires
  event.create('invar_wire').displayName('Invar Wire')

})