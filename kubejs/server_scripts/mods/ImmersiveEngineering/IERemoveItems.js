ServerEvents.recipes(event => {

    //Crusher
    event.remove({id:/immersiveengineering:crusher.+/})
    event.remove({id:/farmersdelight:integration.+immersiveengineering.+crusher.+/})

    //Saw Mill
    event.remove({id:/immersiveengineering.+sawmill.+/})
    event.remove({id:'immersiveengineering:crafting/sawblade'})

    //Magnet
    event.remove({id:'immersiveengineering:crafting/toolupgrade_powerpack_magnet'})

    //Aluminium
    event.remove({output:/immersiveengineering.+alu.+/})
    event.remove({id:'industrialforegoing:laser_drill_ore/raw_materials/aluminum'})
    event.replaceInput(
        {output:/immersiveengineering:.+/},
        '#forge:ingots/aluminum',
        'thermal:invar_ingot'
    )
    event.replaceInput(
        {output:/immersiveengineering:.+/},
        '#forge:plates/aluminum',
        'thermal:invar_plate'
    )
    event.replaceInput(
        {output:/immersiveengineering:.+/},
        '#forge:dusts/aluminum',
        'thermal:invar_dust'
    )
    event.replaceInput(
        {output:/immersiveengineering:.+/},
        '#forge:rods/aluminum',
        'kubejs:invar_rod'
    )
    event.replaceInput(
        {output:/immersiveengineering:.+/},
        '#forge:wires/aluminum',
        'kubejs:invar_wire'
    )  

})