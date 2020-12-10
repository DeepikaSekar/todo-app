const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(" Enter your ID: ", function (id) {
    rl.question(" Enter the Title: ", function (title) {

        let data = fs.readFileSync("./data.json");
        let student = JSON.parse(data);
        const copy = [...student];
        copy.push({ id: id, title: title })

        fs.writeFileSync("./data.json", JSON.stringify(copy));

        rl.question(" Enter the Id to Delete: ", function (id) {


            let data = fs.readFileSync("./data.json");
            let student = JSON.parse(data);

            const filtered = student.filter(e => e.id !== id)
            fs.writeFileSync("./data.json", JSON.stringify(filtered));

            rl.close();
        });

    });

});

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
