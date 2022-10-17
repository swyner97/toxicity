const threshold = 0.5;
const toxicity = require('@tensorflow-models/toxicity');

toxicity.load(threshold).then((model) => {
    const sentences = ["You are a tiny, little baby poop", "My favorite color is blue.", "Shut up!"];

    model.classify(sentences).then((predictions) => {
        const toxic = predictions.filter(prediction => prediction.label === "toxicity");

        const results = toxic[0].results;

        for (let i = 0; i < results.length; i++) {

            let truthy = results[i].match;
            
            if (truthy === true){
                console.log(truthy)
            }
        }
    })

});

