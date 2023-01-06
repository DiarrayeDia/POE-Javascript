function main(class1) {
    let result = "";
     for (const [key, value] of Object.entries(class1)) {
        if ((typeof value !== "function") && (typeof value !== "undefined") && (typeof value !== "object")){
            result += `${key}: ${value}, `;
        }
      } return result.slice(0, -2);
}

module.exports = main;