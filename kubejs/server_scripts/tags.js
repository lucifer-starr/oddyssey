// Listen to item tag event
ServerEvents.tags('item', e => {
    e.removeAll('bountifulfares:walnut_logs')
    e.add('nomansland:walnut_logs', 'bountifulfares:walnut_log')
    e.add('nomansland:walnut_logs', 'bountifulfares:walnut_wood')
    e.add('nomansland:walnut_logs', 'bountifulfares:stripped_walnut_log')
    e.add('nomansland:walnut_logs', 'bountifulfares:stripped_walnut_wood')
  
})