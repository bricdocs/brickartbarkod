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
 
    "I-G-K-D-I-G-K-D-I": "C7",
    "I-G-I-D-K-G-K-D-I": "C8",
    "I-D-I-G-K-G-K-D-I": "C9",
    //"K-I-D-K-G-K-G-I-D": "CT",
    "I-D-I-D-K-G-K-D-I": "CJ",
    "I-D-I-D-K-G-K-G-I": "CQ",
    "I-G-K-D-K-G-I-D-I": "CK",

    //DIAMONDS
    "I-D-K-G-I-G-I-G-I": "DA",
    "I-G-I-G-I-G-K-D-I": "D2",
    "D-I-D-I-D-I-G-K-D": "D3",

    "I-D-I-D-K-G-I-D-I": "D5",
    "I-D-I-D-I-G-I-D-I": "D6",
    "I-G-I-D-I-G-I-D-I": "D7",
    "I-G-K-D-I-G-I-D-I": "D8",
    "I-D-K-D-I-G-I-D-I": "D9",
    "G-I-G-I-D-I-D-I-D": "DT",
    "K-G-I-D-I-D-I-D-I": "DJ",
    "K-D-I-D-I-D-I-D-I": "DQ",
    "I-D-I-D-I-D-I-D-I": "DK",

    //HEARTS
    "I-D-I-D-I-D-I-D-I": "HA",
    "I-G-K-D-K-D-I-D-I": "H2",
    "I-G-I-G-K-D-I-D-I": "H3",
    "I-D-I-G-I-D-I-D-I": "H4",
    "I-G-I-G-I-D-I-D-I": "H5",
    "I-G-K-G-I-D-I-D-I": "H6",
    "I-D-K-G-I-D-I-D-I": "H7",
    "I-D-K-G-K-D-I-D-I": "H8",
    "K-I-G-K-G-K-D-I-D": "H9",

    "I-G-I-D-K-D-I-D-I": "HJ",
    "D-I-D-I-G-K-D-I-D": "HQ",

    //SPADES
    "I-D-I-D-I-G-I-G-I": "SA",
    "I-G-I-D-K-G-I-G-I": "S2",
    "I-D-I-G-K-G-I-G-I": "S3",

    "I-G-I-G-K-D-I-G-I": "S5",    //"G-K-I-D-I-D-K-D-I"
    "I-D-K-G-K-D-I-G-I": "S6",
    "I-G-K-G-I-D-I-G-I": "S7",
    "D-I-D-I-G-I-D-I-G": "S8",
    "I-D-I-D-I-D-I-G-I": "S9",
    "I-D-K-G-I-D-K-G-I": "ST",
    "I-G-K-D-I-D-K-G-I": "SJ",
    "I-D-K-D-I-D-I-G-I": "SQ",
    "D-I-G-I-D-I-D-I-G": "SK",

//SORUNLU KARTLAR 
    "D-I-G-I-G-I-D-K-G": "S4",    //MEVCUT SORUNLU
    "I-G-K-G-K-D-K-G-I": "S4",    //S4 PC LOGDAN ALINDI EKLEME 20.08.2026
    "I-G-I-G-I-D-K-G-I": "S4",    // GÖZLE EKLEME VE CEPTEN 20.08.2026

    "I-G-K-D-K-D-K-D-K-D-K": "H10",    //EKLEME 20.08.2026
    //"I-G-I-D-I-D-K-D-I-D-I": "H10",
    "I-G-K-D-K-D-K-D-K-D-I": "H10",     // MEVCUT 11 Harfli Gerçek Tam Kod //"I-G-I-G-K-G-I-D-I": "HT",        //D4 MUKERRERDI DUZELTILDI >> I-G-I-G-K-G-I-D-I

   "K-I-D-K-G-I-G-K-D": "C6",    //MEVCUT
   "I-D-K-G-K-G-K-D-I": "C6",    //EKLEME 20.08.2026 LOGDAN
   "K-D-K-G-K-G-K-D-I": "C6",    //EKLEME 20.08.2026 LOGDAN
   "I-D-K-G-I-G-K-D-I": "C6",    //EKLEME 20.08.2026 LOGDAN

   "G-I-D-I-D-K-D-D-I": "D4",     //MEVCUT HT MUKERRERDI DUZELTILDI >> I-G-I-G-K-G-I-D-I       
   "I-G-K-G-K-G-K-D-I": "D4",     //EKLEME 20.08.2026 LOGDAN
   "I-G-K-G-K-G-I-D-I": "D4",     //EKLEME 20.08.2026 LOGDAN
   "I-G-K-G-K-G-K-D-K": "D4",      //EKLEME 20.08.2026 LOGDAN
   "I-G-I-G-K-G-I-D-I": "D4",      //EKLEME 20.08.2026 CEPTEN

    "I-D-K-G-K-G-K-D-K-G-I": "HK",     // 11 Harfli Gerçek Tam Kod
    "I-D-I-D-K-D-K-D-I-D-I": "HK"     // 20.08.2026 EKLENDI GOZLE
   
    


};
