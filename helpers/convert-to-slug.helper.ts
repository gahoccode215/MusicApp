import unidecode from "unidecode";

export const convertToSlug = (text: string): string => {
    // Loại bỏ dấu tiếng Việt và các ký tự đặc biệt
    const unidecodeText: string = unidecode(text);

    const slug: string = unidecodeText
        .replace(/\s+/g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang
        .replace(/-+/g, "-"); // Loại bỏ nhiều dấu gạch ngang liên tiếp

    return slug;
};