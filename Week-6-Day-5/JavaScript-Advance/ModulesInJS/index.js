// import { Teacher } from "./teacher.js";
// import { promote } from "./teacher.js"

// since Teacher is the default export we don't need curly braces
import Teacher, { promote } from "./teacher.js";

const teacher = new Teacher("Ms. Ann", "MSc");
teacher.teach();