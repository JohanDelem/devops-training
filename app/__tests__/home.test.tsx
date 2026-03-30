const res = await fetch("http://localhost:3000");

if (res.status == 200) {
    console.log("test OK");
} else {
    console.log("test FAILED")
    process.exitCode = 1;
}
export { };

