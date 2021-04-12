// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`140007000304040404040404040404040404040404040406020805050505050505050505050505050500000702050505050505050505050505050505050000070205050505050505050505050905050505000007020505050505050505050505050505050500000702050505050505050505050505050505050000070101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.builtin.forestTiles9,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
