const { isInternalImport } = require("../is-internal-import")

describe("match esm imports", () => {
    it("should match the internal import 1", () => {
        const str = `import { createPresentController } from "./controller/create-task";`
        const res = isInternalImport(str)
        expect(res === true).toBeTruthy()
    })

    it("should match the internal import 2", () => {
        const str = `import { createPresentController } from "../controller/create-task";`
        const res = isInternalImport(str)
        expect(res === true).toBeTruthy()
    })

    it("should NOT match the external import", () => {
        const str = `import { createPresentController } from "express";`
        const res = isInternalImport(str)
        expect(res === false).toBeTruthy()
    })
})