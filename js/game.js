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
                    nextLevel: "bronx",
                },

                {
                    text: "Run/Move Away",
                    nextLevel: "end1",
                },
            ]
        },

        riot: {
            background_image: "cyrus.gif",
            music: "digit.m4a",
            message: "You gain rule over The Empire during a riot. Side 1, the majority, is asking for renovations of security and general well being for their home planet. While Side 2, the minority, want more advancments in your millitary as the fear/forsee a future lose from rebelians and outside forces.",
            choices: [
                {
                    text: "Tell police",
                    nextLevel: "snitch",
                },
                {
                    text: "Run!!!!!",
                    nextLevel: "run",
                },
            ]
        },

        end1: {
            message: "You live your life on the run from The Empire",
             background_image: "rogues.gif",
             music: "Mobb Deep - Shook Ones.mp3",
            choices: [
                {

                    text: "Start over?",
                    nextLevel: "start",
                },
            ]
        },
        
        snitch: {
            background_image: "riffs.gif",
            music: "Mobb Deep - Shook Ones.mp3",
            message: "The police hand you over to the Gramercy Riffs for a $20",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        run: {
            background_image: "orphans.gif",
            music: "M.O.P. - Cold as Ice (Audio).mp3",
            message: "You slip by the Orphans and make a friend",
            choices: [
                {
                    text: "Split Up?",
                    nextLevel: "split",
                },
                {
                    text: "Stay together",
                    nextLevel: "stay",
                },
                {
                    text: "Start over",
                    nextLevel: "start",
                },    
               ]
        },
        
            stay: {
            background_image: "police2.jpg",
            music: "KRS-One - Sound of da Police.mp3",
            message: "The group is too big. The police find us and stick us in Central Booking",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
            
            split: {
            background_image: "split.gif",
            music: "Police siren sound effect 1.mp3",
            message: "We split up, to keep the police off our trail",
            choices: [
                {
                    text: "Grand Central",
                    nextLevel: "gc",
                },
                {
                    text: "Central Park",
                    nextLevel: "cp",
                },
                {
                    text: "Ajax",
                    nextLevel: "ajax",
                },
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
    
        gc: {
            background_image: "lizzies1.gif",
            music: "Lil' Kim feat. Lil Cease - Crush On You (1997).mp3",
            message: "Time for a break? The Lizzies invite you over. Can you trust them?",
            choices: [
                {
                    text: "Hang with the Lizzies?",
                    nextLevel: "lizzies",
                },
                 {
                    text: "Go meet Swan and the others",
                    nextLevel: "subway",
                },
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        cp: {
            background_image: "furies.gif",
            music: "Terror Squad - Lean Back ft. Fat Joe, Remy Ma.mp3",
            message: "You run into the baseball furies. Tough fight! You lose a few warriors...",
            choices: [
                {
                    text: "Head to subway",
                    nextLevel: "subway",
                },
                 {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        ajax: {
            background_image: "ajax2.gif",
            music: "DMX - Ruff Ryders' Anthem.mp3",
            message: "Ajax was a brave warrior, but he didn't respect the warrior's code. We never saw him again.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }
            ]
        },
        lizzies: {
            background_image: "lizzies2.jpg",
            music: "Mobb Deep - Shook Ones.mp3",
            message: "The Lizzies set you up. Only one of you makes it out of their lair.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }
            ]
        },
        subway: {
            background_image: "backtobk.gif",
            music: "Crooklyn Dodgers (Special Ed, Masta Ace & Buckshot) - Crooklyn.mp3",
            message: "You make it to the D train! Headed home to C.I.! But is it over?",
            choices: [
                {
                    text: "Home to Coney Island",
                    nextLevel: "coney",
                },
                {
                    text: "Start over",
                    nextLevel: "start",
                }
            ]
        },
        coney: {
            background_image: "Untitled-1.gif",
            music: "Crooklyn Dodgers '95 - Return of the Crooklyn Dodgers.mp3",
            message: "You made it! The whole city knows...You're the best!",
            choices: [
                {
                    text: "Play Again!?",
                    nextLevel: "start",
                }
            ]
        },
        
        }
        };