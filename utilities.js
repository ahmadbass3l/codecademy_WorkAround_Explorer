function formatNumber(number) {
    let formatted_str = String(number).replace(".", "").trim();
    const slices = formatted_str.match(/.{1,3}/g);
    formatted_str = slices.join(",");
    return formatted_str;
};

export default formatNumber;