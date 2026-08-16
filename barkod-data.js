/***********************************************************
 * HARİCİ JANNERSTEN BARKOD VERİTABANI (barkod-data.js)
 * Okuttuğunuz yeni kartları ve güncel örüntüleri buraya ekleyin.
 ***********************************************************/

const JANNERSTEN_DECK_MAP = {
    // Canlı Ekran Yakalaması
    //CLUBS
    "I-G-K-D-I-G-I-G-I": "CA",
    "I-D-I-G-I-G-K-G-I": "C2",
    "I-G-I-D-I-G-K-G-I": "C3",
    "D-I-D-I-D-I-D-K-G": "C4",
    "I-D-K-I-G-K-D-K-D": "C5",
    "K-I-D-K-G-I-G-K-D": "C6",
    "I-G-K-D-I-G-K-D-I": "C7",
    "I-G-I-D-K-G-K-D-I": "C8",
    "I-D-I-G-K-G-K-D-I": "C9",
    "K-I-D-K-G-K-G-I-D": "CT",
    "I-D-I-D-K-G-K-D-I": "CJ",
    "I-D-I-D-K-G-K-G-I": "CQ",
    "I-G-K-D-K-G-I-D-I": "CK",

    //DIAMONDS
    "I-D-K-G-I-G-I-G-I": "DA",
    "I-G-I-G-I-G-K-D-I": "D2",
    "D-I-D-I-D-I-G-K-D": "D3",
    "I-G-I-G-K-G-I-D-I": "D4",
    "I-D-I-D-K-G-I-D-I": "D5",
    "I-D-I-D-I-G-I-D-I": "D6",
    "I-G-I-D-I-G-I-D-I": "D7",
    "I-G-K-D-I-G-I-D-I": "D8,
    "I-D-K-D-I-G-I-D-I": "D9",
    "G-I-G-I-D-I-D-I-D": "DT",
    "K-G-I-D-I-D-I-D-I": "DJ",
    "K-D-I-D-I-D-I-D-I": "DQ",
    "I-D-I-D-I-D-I-D-I": "DK",

    
    "D-I-G-I-G-I-D-K-G": "Maça 4",//ESKI Örüntü: I-D-I-D-I-D-I-D-I
    "D-I-D-I-G-I-D-I-G": "Spade 8",
    "D-I-G-I-D-I-D-I-G": "Spade King"
    
    // // Aslar
    // "I-D-I-D-K-D-I-D-I": "Sinek As (Ace of Clubs)",
    // "I-D-I-D-I-D-K-D-I": "Kupa As (Ace of Hearts)",
    // "I-D-I-D-I-D-I-D-K": "Karo As (Ace of Diamonds)",
    // "I-D-K-D-I-D-I-D-I": "Maça As (Ace of Spades)",

    // // Valeler ve 3'lüler
    // "I-D-I-D-K-D-I-D-K": "Kupa Vale (Jack of Hearts)",
    // "I-G-I-G-K-G-I-G-K": "Kupa 3 (3 of Hearts)", 
    // "K-D-I-D-K-D-I-D-I": "Sinek Vale",
    // "I-D-K-D-I-D-K-D-I": "Maça Vale",

    // // Kızlar ve 6'lılar
    // "K-D-K-D-K-D-I-D-I": "Sinek Kız (Queen of Clubs)",
    // "K-G-K-G-K-G-I-G-I": "Sinek 6 (6 of Clubs)", 
    // "I-D-K-D-K-D-K-D-I": "Maça Kız (Queen of Spades)",
    // "I-G-K-G-K-G-K-G-I": "Maça 6 (6 of Spades)",
    // "I-D-I-D-K-D-K-D-K": "Kupa Kız",

    // // Papazlar ve 2'liler
    // "K-D-I-D-I-D-I-D-I": "Sinek Papaz (King of Clubs)",
    // "K-G-I-G-I-G-I-G-I": "Sinek 2 (2 of Clubs)",
    // "I-D-I-D-I-D-K-D-I": "Karo Papaz (King of Diamonds)",
    // "I-G-I-G-I-G-K-G-I": "Karo 2 (2 of Diamonds)",
    // "I-D-K-D-I-D-I-D-I": "Maça Papaz",
    // "I-D-I-D-K-D-I-D-I": "Kupa Papaz",

    // // Diğer Sayı Kartları
    // "K-D-K-D-I-D-I-D-I": "Sinek 10 (10 of Clubs)",
    // "I-D-K-D-K-D-I-D-I": "Maça 10 (10 of Spades)",
    // "I-G-K-G-K-G-I-G-I": "Maça 9 (9 of Spades)",
    // "I-D-I-D-K-D-K-D-I": "Kupa 9 (9 of Hearts)",
    // "I-G-I-G-K-G-K-G-I": "Kupa 5 (5 of Hearts)",
    // "I-D-I-D-I-D-K-D-K": "Karo 10 (10 of Diamonds)",
    // "I-G-I-G-I-G-K-G-K": "Karo 5 / Karo 7 / Sinek 8", 
    // "K-D-K-D-K-D-K-D-I": "Sinek 7 (7 of Clubs)",
    // "I-D-I-D-I-D-I-D-K": "Kupa 4 (4 of Hearts)",
    // "K-D-I-D-I-D-I-D-I": "Karo 4 (4 of Diamonds)"
};
