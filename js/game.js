// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Martha And The Vandellas - Nowhere to Run (with lyrics) - HD.mp3",
    background_image: "1502551331_source.gif",
    levels: {

        start: {
            message: "You have been choosen to be the supreme ruler of a The Empire. Its a great honor but the title carries great responsibility.",
            choices: [
                {
                    text: "Accpet your fate and become supreme ruler",
                    nextLevel: "empire1",
                },

                {
                    text: "Run/Move Away",
                    nextLevel: "end1",
                },
            ]
        },

        empire1: {
            background_image: "cyrus.gif",
            message: "You gain rule over The Empire during a riot. Side 1, the majority, is asking for renovations of security and general well being for their home planet. While Side 2, the minority, want more advancments in your millitary as they fear/forsee a future lose from rebelians and outside forces.",
            choices: [
                {
                    text: "Side1",
                    nextLevel: "side1",
                },
                {
                    text: "Side2",
                    nextLevel: "side2",
                },
            ]
        },

        end1: {
            message: "You live your life on the run from The Empire",
             background_image: "rogues.gif",
            choices: [
                {

                    text: "Start over?",
                    nextLevel: "start",
                },
            ]
        },
        
        side1: {
            background_image: "riffs.gif",
            message: "Most fo your subjects accept you as ruler, but you have been advised that there is a small rebellion is being formed. You could deal with it but a few outside forces have declared war on The Empire",
            choices: [
                {
                    text: "Ignore the reballion",
                    nextLevel: "ignore",
                },
                {
                    text: "Fight off the rebellion",
                    nextLevel: "fight",
                },
            ]
        },
        
        ignore: {
            background_image: "orphans.gif",
            message: "You ignore the rebellion and successfully fight off the outside forces. Many years have pasted and now the rebellion has offically declared war against you and The Empire. They have grown profusely in size and strength. There is a good chance you may loose. Should you attempt to fight rebellion or run away your position.",
            choices: [
                {
                    text: "Fight the rebellion",
                    nextLevel: "fight2",
                },
                {
                    text: "run away",
                    nextLevel: "end1",
                },   
               ]
        },
        
        fight: {
        background_image: "police2.jpg",
        message: "You successfully fight off the small rebellions and have a great amount of troops left to fight off the outside invading forces. Congratulations you have successfully made it through your few years",
        choices: [
            {
                text: "Start over",
                nextLevel: "start",
            },
            ]
        },  
        fight2: {
        background_image: "split.gif",
        message: "You attempt to fight the rebels. Both armies are now severely weakened. A Jedi approaches you and challenges you to a fight. After a few mintues of lightsabder duels you are brought your knees. With their lightsaber at your neck they give you two options. Surrender and Live or attempt to fight and die ",
        choices: [
            {
                text: "Attempt to fight",
                nextLevel: "fight3",
            },
            {
                text: "Surrender",
                nextLevel: "surrender",
            },
            ]
        },
        fight3: {
            background_image: "furies.gif",
            message: "You attempt to grab your ligthsaber but before can the Jedi quickly slits your neck. GAMEOVER",
            choices: [
                 {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        surrender: {
            background_image: "ajax2.gif",
            message: "You surrender and are released from your position, you now live in constant fear from your former subjects. But you plan to someday regain control of your former empire",
            choices: [
                {
                    text: "Start over?",
                    nextLevel: "start",
                }
            ]
        },
        }
        };