import { createConnection } from "typeorm";

import { Family } from "./entities/family";
import { FamilyRepository } from "./repositories/family.repository";

export const startConnection =  (async () => {
    // Initialize a connection pool against the database.
    try {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "jpb_dev",
            password: "Pick",
            database: "family-present",
            entities: [Family],
            synchronize: true
        });

        const personRepository = connection.getCustomRepository(FamilyRepository);

        // Register a new person in the database by calling the repository.
        const newFam = new Family();
        newFam.name = "BLOND";
        await personRepository.save(newFam);

        console.log("we are connected")

        await connection.close()
    } catch (err) {
        console.error({err})
    }
    // const per sonRepository = connection.getCustomRepository(FamilyRepository);
    //
    // // Register a new person in the database by calling the repository.
    // const newFam = new Family();
    // newFam.name = "BLOND";
    // await personRepository.save(newFam);

    // Find the person we just saved to the database using the custom query
    // method we wrote in the person repository.
    // const existingPerson = await personRepository.findByName("Jane Doe");
    // if (!existingPerson) {
    //     throw Error("Unable to find Jane Doe.");
    // }

    // Change the person's full name.
    // await personRepository.updateName(existingPerson.id, "Jane Johnson");

    // Remove the person from the database.
    // await personRepository.remove(existingPerson);

    // Clean up our connection pool so we can exit.
    // await connection.close();
});