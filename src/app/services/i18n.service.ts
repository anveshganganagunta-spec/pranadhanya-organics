import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'te';

export const TRANSLATIONS: Record<string, Record<Lang, string>> = {
  nav_home: { en: 'Home', te: 'హోమ్' },
  nav_products: { en: 'Products', te: 'ఉత్పత్తులు' },
  nav_recipes: { en: 'Recipes', te: 'వంటకాలు' },
  nav_about: { en: 'About', te: 'గురించి' },
  nav_gallery: { en: 'Gallery', te: 'గ్యాలరీ' },
  nav_contact: { en: 'Contact', te: 'సంప్రదించండి' },

  hero_eyebrow: { en: 'Manikonda, Hyderabad', te: 'మణికొండ, హైదరాబాద్' },
  hero_h1_main: { en: 'Millets, Pulses & Dry Fruits — ', te: 'చిరుధాన్యాలు, పప్పులు & డ్రై ఫ్రూట్స్ — ' },
  hero_h1_em: { en: 'Straight From the Farm', te: 'పొలం నుండి నేరుగా' },
  hero_sub: { en: "Premium quality, hygienically packed, and delivered across Hyderabad — grown the way your grandmother would recognise.", te: 'అత్యుత్తమ నాణ్యత, పరిశుభ్రంగా ప్యాక్ చేయబడి, హైదరాబాద్ అంతటా డెలివరీ చేయబడుతుంది.' },
  hero_cta1: { en: 'Explore Products', te: 'ఉత్పత్తులు చూడండి' },
  hero_cta2: { en: 'Order on WhatsApp', te: 'వాట్సాప్‌లో ఆర్డర్ చేయండి' },

  s2_eyebrow: { en: 'Handpicked & Graded', te: 'చేతితో ఎంపిక చేయబడినవి' },
  s2_h1_main: { en: 'Almonds, Cashews & ', te: 'బాదం, జీడిపప్పు & ' },
  s2_h1_em: { en: 'More, Always Fresh', te: 'ఎప్పుడూ తాజావి' },
  s2_sub: { en: 'Sourced in small batches so every pack reaches you crisp, never stale, never sitting on a shelf too long.', te: 'చిన్న బ్యాచ్‌లలో సేకరిస్తాము కాబట్టి ప్రతి ప్యాక్ మీకు తాజాగా చేరుతుంది.' },

  s3_eyebrow: { en: 'Ground in Small Batches', te: 'చిన్న మోతాదులో మరపబడినవి' },
  s3_h1_main: { en: 'Pulses & Spices ', te: 'ఇంటి రుచిని ' },
  s3_h1_em: { en: 'That Taste Like Home', te: 'గుర్తుచేసే పప్పులు & మసాలాలు' },
  s3_sub: { en: "No fillers, no colour added — just dals and masalas the way they're meant to be.", te: 'ఎలాంటి కల్తీ లేదా రంగులు లేవు — అసలైన పప్పులు, మసాలాలు.' },

  s4_eyebrow: { en: 'Wholesale & Retail', te: 'టోకు & చిల్లర' },
  s4_h1_main: { en: 'Stocking a Shop? ', te: 'దుకాణం నడుపుతున్నారా? ' },
  s4_h1_em: { en: 'We Deliver in Bulk Too', te: 'మేము బల్క్‌లో కూడా డెలివరీ చేస్తాము' },
  s4_sub: { en: 'From a single kilo to a full sack — fast delivery across Hyderabad, on schedule every time.', te: 'ఒక కిలో నుండి పూర్తి బస్తా వరకు — హైదరాబాద్ అంతటా వేగవంతమైన డెలివరీ.' },
  s4_cta1: { en: 'Get Wholesale Pricing', te: 'టోకు ధరలు తెలుసుకోండి' },

  cat_kicker: { en: 'Shop by Category', te: 'కేటగిరీ వారీగా కొనండి' },
  cat_h2: { en: 'Everything from the same honest harvest', te: 'ఒకే నిజాయితీ గల పంట నుండి అన్నీ' },
  cat_millets: { en: 'Millets', te: 'చిరుధాన్యాలు' },
  cat_pulses: { en: 'Pulses', te: 'పప్పులు' },
  cat_dryfruits: { en: 'Dry Fruits', te: 'డ్రై ఫ్రూట్స్' },
  cat_spices: { en: 'Spices', te: 'మసాలాలు' },
  order_now: { en: 'Order Now', te: 'ఇప్పుడే ఆర్డర్ చేయండి' },

  bs_kicker: { en: 'Best Sellers', te: 'బెస్ట్ సెల్లర్స్' },
  bs_h2: { en: 'What Hyderabad keeps re-ordering', te: 'హైదరాబాద్ మళ్లీ మళ్లీ ఆర్డర్ చేసేవి' },
  bs_ragi: { en: 'Ragi', te: 'రాగులు' },
  bs_foxtail: { en: 'Foxtail Millet', te: 'కొర్రలు' },
  bs_almonds: { en: 'Almonds', te: 'బాదం' },
  bs_cashews: { en: 'Cashews', te: 'జీడిపప్పు' },
  bs_jowar: { en: 'Jowar', te: 'జొన్నలు' },
  bs_butter: { en: 'Butter', te: 'వెన్న' },
  prod_little_millet: { en: 'Little Millet', te: 'సామ' },
  prod_foxtail_millet: { en: 'Foxtail Millet', te: 'కొర్రలు' },
  prod_barnyard_millet: { en: 'Barnyard Millet', te: 'కొడాలి' },
  prod_kodo_millet: { en: 'Kodo Millet', te: 'కొడాలి చిన్న' },
  prod_browntop_millet: { en: 'Browntop Millet', te: 'బ్రౌన్టాప్ మిల్లెట్' },
  prod_pearl_millet: { en: 'Pearl Millet (Bajra)', te: 'సజ్జా (బజ్రా)' },
  prod_finger_millet: { en: 'Finger Millet (Ragi)', te: 'ఏంగు (రాగి)' },
  prod_sorghum: { en: 'Sorghum (Jowar)', te: 'సొరగుము (జొన్న)' },
  prod_green_gram: { en: 'Green Gram', te: 'పెసరపప్పు' },
  prod_toor_dal: { en: 'Toor Dal', te: 'తూర దాల్' },
  prod_chana_dal: { en: 'Chana Dal', te: 'చనదాల్' },
  prod_urad_dal: { en: 'Urad Dal', te: 'ఉరద్ దాల్' },
  prod_masoor_dal: { en: 'Masoor Dal', te: 'మసూర్ దాల్' },
  prod_rajma: { en: 'Rajma', te: 'రాజ్మా' },
  prod_almonds: { en: 'Almonds', te: 'బాదం' },
  prod_cashews: { en: 'Cashews', te: 'జీడిపప్పు' },
  prod_walnuts: { en: 'Walnuts', te: 'వాల్నట్స్' },
  prod_raisins: { en: 'Raisins', te: 'ద్రాక్షపండ్లు' },
  prod_pistachios: { en: 'Pistachios', te: 'పిస్తా' },
  prod_dates: { en: 'Dates', te: 'ఖర్జూర్' },
  prod_dry_apricots: { en: 'Dry Apricots', te: 'డ్రై ఎప్రికోట్స్' },
  prod_turmeric_powder: { en: 'Turmeric Powder', te: 'పసుపు పొడి' },
  prod_chilli_powder: { en: 'Chilli Powder', te: 'మిర్చి పొడి' },
  prod_coriander_powder: { en: 'Coriander Powder', te: 'ధనియాల పొడి' },
  prod_cumin_powder: { en: 'Cumin Powder', te: 'జీలకర్ర పొడి' },
  prod_black_pepper_powder: { en: 'Black Pepper Powder', te: 'కల్లుమిర్చి పొడి' },
  prod_garam_masala: { en: 'Garam Masala', te: 'గరం మసాలా' },
  prod_groundnut: { en: 'Groundnut', te: 'వేరుశనగ' },
  prod_groundnut_oil: { en: 'Groundnut Oil', te: 'వేరుశనగ నూనె' },
  prod_groundnut_chutney_powder: { en: 'Groundnut Chutney Powder', te: 'వేరుశనగ చట్నీ పొడి' },

  why_kicker: { en: 'Why Pranadhanya Organics', te: 'మేమెందుకు?' },
  why_h2: { en: "Five reasons our customers don't shop anywhere else", te: 'మా వినియోగదారులు మరెక్కడా కొనని ఐదు కారణాలు' },
  why_copy: { en: 'A family-run store in Manikonda, sourcing directly from millet and pulse farmers so what reaches your kitchen is exactly what left the field — nothing polished away, nothing added in.', te: 'మణికొండలోని కుటుంబ నిర్వహణలోని దుకాణం, చిరుధాన్యాలు మరియు పప్పుల రైతుల నుండి నేరుగా సేకరిస్తుంది — పొలం నుండి మీ వంటగదికి వచ్చేది అదే, ఏమీ కలపబడదు.' },
  why_1: { en: 'Premium Quality', te: 'అత్యుత్తమ నాణ్యత' },
  why_2: { en: 'Farm Fresh', te: 'పొలం నుండి తాజా' },
  why_3: { en: 'Hygienically Packed', te: 'పరిశుభ్రంగా ప్యాక్ చేయబడింది' },
  why_4: { en: 'Wholesale & Retail', te: 'టోకు & చిల్లర' },
  why_5: { en: 'Fast Delivery', te: 'వేగవంతమైన డెలివరీ' },

  hb_kicker: { en: 'Health Benefits', te: 'ఆరోగ్య ప్రయోజనాలు' },
  hb_h2: { en: 'Good for the body, easy on the day', te: 'శరీరానికి మేలు, రోజువారీ ఆహారానికి సులభం' },
  hb_1: { en: 'High Fiber', te: 'అధిక ఫైబర్' },
  hb_2: { en: 'Rich in Protein', te: 'ప్రోటీన్ అధికం' },
  hb_3: { en: 'Gluten Free', te: 'గ్లూటెన్ ఫ్రీ' },
  hb_4: { en: 'Diabetic Friendly', te: 'మధుమేహులకు అనుకూలం' },
  hb_5: { en: 'Heart Healthy', te: 'గుండెకు మేలు' },

  rec_kicker: { en: 'Recipes', te: 'వంటకాలు' },
  rec_h2: { en: 'A few ways to start using them tonight', te: 'ఈ రోజు రాత్రి నుండే మొదలుపెట్టేందుకు కొన్ని మార్గాలు' },
  rec_1_title: { en: 'Millet Dosa', te: 'మిల్లెట్ దోశ' },
  rec_1_desc: { en: 'Crisp, golden dosas made with foxtail millet batter — same crunch, gentler on the gut.', te: 'కొర్రల పిండితో చేసిన కరకరలాడే దోశలు — అదే రుచి, జీర్ణానికి తేలిక.' },
  rec_2_title: { en: 'Millet Salad', te: 'మిల్లెట్ సలాడ్' },
  rec_2_desc: { en: 'Cooked foxtail or little millet tossed with cucumber, lemon and roasted peanuts.', te: 'ఉడికించిన కొర్రలు లేదా సామలు దోసకాయ, నిమ్మరసం, వేయించిన వేరుశనగలతో కలిపినది.' },
  rec_3_title: { en: 'Millet Khichdi', te: 'మిల్లెట్ ఖిచిడీ' },
  rec_3_desc: { en: 'A one-pot comfort dish with ragi or jowar, moong dal and ghee-roasted spices.', te: 'రాగులు లేదా జొన్నలు, పెసర పప్పు, నెయ్యిలో వేయించిన మసాలాలతో చేసే వన్-పాట్ వంటకం.' },

  gal_kicker: { en: 'Gallery', te: 'గ్యాలరీ' },
  gal_h2: { en: 'From the store shelves', te: 'దుకాణం అరల నుండి' },

  contact_kicker: { en: 'Contact Us', te: 'మమ్మల్ని సంప్రదించండి' },
  contact_h2: { en: 'Order, ask, or just say hello', te: 'ఆర్డర్ చేయండి, అడగండి, లేదా పలకరించండి' },
  owner_name: { en: 'Anvesh G', te: 'అన్వేష్ జి' },
  owner_role: { en: 'Owner, Pranadhanya Organics', te: 'యజమాని, ప్రాణధాన్య ఆర్గానిక్స్' },
  whatsapp_label: { en: 'Chat on WhatsApp', te: 'వాట్సాప్‌లో మాట్లాడండి' },
  address: { en: 'Manikonda, Hyderabad', te: 'మణికొండ, హైదరాబాద్' },
  view_on_map: { en: 'View on Google Maps', te: 'గూగుల్ మ్యాప్స్‌లో చూడండి' },

  footer: { en: '© 2026 Pranadhanya Organics · Manikonda, Hyderabad', te: '© 2026 ప్రాణధాన్య ఆర్గానిక్స్ · మణికొండ, హైదరాబాద్' },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  lang = signal<Lang>('en');

  setLang(lang: Lang): void {
    this.lang.set(lang);
    document.body.classList.toggle('lang-te', lang === 'te');
    document.body.classList.toggle('lang-en', lang === 'en');
  }

  t(key: string): string {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[this.lang()];
  }
}
