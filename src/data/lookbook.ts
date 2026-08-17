// roinamis — apparel mockup concepts and campaign directions.
// Every image lives in src/assets/lookbook/<category>/ and is imported here,
// so the gallery never depends on temporary or external URLs.

import teeCreamOversizedFront from "@/assets/lookbook/tees/tee-cream-oversized-front.jpg";
import teeFadedBlackBack from "@/assets/lookbook/tees/tee-faded-black-back.jpg";
import teeEspressoFlatlay from "@/assets/lookbook/tees/tee-espresso-flatlay.jpg";
import teeStoneBarn from "@/assets/lookbook/tees/tee-stone-barn.jpg";
import teeSandField from "@/assets/lookbook/tees/tee-sand-field.jpg";
import teeWashedGreyRooftop from "@/assets/lookbook/tees/tee-washed-grey-rooftop.jpg";

import muscleFadedBlackStudio from "@/assets/lookbook/muscle/muscle-faded-black-studio.jpg";
import muscleStoneStucco from "@/assets/lookbook/muscle/muscle-stone-stucco.jpg";
import muscleRawEdgeDetail from "@/assets/lookbook/muscle/muscle-raw-edge-detail.jpg";
import muscleEspressoLayeredBack from "@/assets/lookbook/muscle/muscle-espresso-layered-back.jpg";
import muscleWashedGreyFlatlay from "@/assets/lookbook/muscle/muscle-washed-grey-flatlay.jpg";
import muscleCreamDuoStudio from "@/assets/lookbook/muscle/muscle-cream-duo-studio.jpg";

import vintageEspressoBackPrint from "@/assets/lookbook/vintage/vintage-espresso-back-print.jpg";
import vintageWashedGreyField from "@/assets/lookbook/vintage/vintage-washed-grey-field.jpg";
import vintageStackStillLife from "@/assets/lookbook/vintage/vintage-stack-still-life.jpg";
import vintageCreamLongsleeveLayer from "@/assets/lookbook/vintage/vintage-cream-longsleeve-layer.jpg";
import vintageFabricMacro from "@/assets/lookbook/vintage/vintage-fabric-macro.jpg";
import vintageFadedBlackSteps from "@/assets/lookbook/vintage/vintage-faded-black-steps.jpg";

import detailNapeEmbroideryCream from "@/assets/lookbook/details/detail-nape-embroidery-cream.jpg";
import detailHemTabFadedBlack from "@/assets/lookbook/details/detail-hem-tab-faded-black.jpg";
import detailShoulderSeamWashedGrey from "@/assets/lookbook/details/detail-shoulder-seam-washed-grey.jpg";

import campaignDawnRoadWide from "@/assets/lookbook/campaign/campaign-dawn-road-wide.jpg";
import campaignChestCropStone from "@/assets/lookbook/campaign/campaign-chest-crop-stone.jpg";
import campaignQuietRoomGrey from "@/assets/lookbook/campaign/campaign-quiet-room-grey.jpg";
import campaignClayWallGroup from "@/assets/lookbook/campaign/campaign-clay-wall-group.jpg";

import referenceBoardGrid from "@/assets/lookbook/references/reference-pinterest-board-streetwear-grid.png";
import referenceBoardFits from "@/assets/lookbook/references/reference-pinterest-board-editorial-fits.png";

export interface Concept {
  id: string;
  no: string;
  image: string;
  alt: string;
  garment: string;
  color: string;
  front: string;
  back: string;
  placement: string;
  fabric: string;
  campaign: string;
  concept: string;
  shots: string[];
}

export interface ConceptGroup {
  id: string;
  title: string;
  intro: string;
  concepts: Concept[];
}

export const references = [
  {
    src: referenceBoardGrid,
    alt: "Reference board: oversized hoodies, washed tees and neutral studio styling",
    label: "reference board 01",
  },
  {
    src: referenceBoardFits,
    alt: "Reference board: editorial streetwear fits and product page layouts",
    label: "reference board 02",
  },
];

export const groups: ConceptGroup[] = [
  {
    id: "oversized-tees",
    title: "Oversized tees",
    intro:
      "Heavy cotton, boxy cut, dropped shoulder. Distress is kept to collar, hem and cuff so the shirt reads worn rather than damaged.",
    concepts: [
      {
        id: "t01",
        no: "01",
        image: teeCreamOversizedFront,
        alt: "Male model in an oversized cream heavyweight tee against a warm studio wall",
        garment: "Oversized boxy tee",
        color: "Cream",
        front: "Clean front. One tonal chest mark, nothing else competing with the drape.",
        back: "Empty back. The silhouette carries the shot.",
        placement: "Cream-on-cream embroidered wave, left chest, 2.5 cm wide.",
        fabric: "400gsm garment-dyed cotton, softened collar, dropped shoulder, long body.",
        campaign: "First Light",
        concept:
          "Studio-simple opener for the drop. Warm plaster wall, single window source, one model, no props. Sets the tone before any styling arrives.",
        shots: [
          "Waist-up front, hands relaxed",
          "Quarter turn showing shoulder drop",
          "Slow push-in video on fabric fall",
        ],
      },
      {
        id: "t02",
        no: "02",
        image: teeFadedBlackBack,
        alt: "Female model from behind in a faded black oversized tee on a dirt road",
        garment: "Oversized boxy tee",
        color: "Faded black",
        front: "Bare front, ribbed collar only.",
        back: "Large tonal back print, one shade off the body color, cracked like a print washed fifty times.",
        placement: "Back print centered between shoulder blades; small woven tab at hem.",
        fabric: "380gsm cotton, sun-fade wash, slightly rolled hem.",
        campaign: "Long Way Home",
        concept:
          "Shot at last light on a dirt road outside town. Walking away, no eye contact, wind in the fabric. The whole idea is distance and a story you only see from behind.",
        shots: [
          "Back full body, road leading out",
          "Detail of cracked back print",
          "Video: walking away, handheld",
        ],
      },
      {
        id: "t03",
        no: "03",
        image: teeEspressoFlatlay,
        alt: "Espresso brown oversized tee laid flat on a stone grey backdrop",
        garment: "Oversized boxy tee",
        color: "Espresso",
        front: "Blank. Product-forward, no graphic.",
        back: "Blank with a small hem tab at the left seam.",
        placement: "Interior neck print only. Nothing on the outside face.",
        fabric: "400gsm garment-dyed cotton, uneven tonal wash, thick ribbed collar, raw hem.",
        campaign: "Stock",
        concept:
          "Catalogue language. Flat, top-down, hard single source, deep shadow. Used for the product page and paid placements where the garment has to be read fast.",
        shots: ["Flat lay top-down", "Fabric fold close-up", "Rotating flat lay video loop"],
      },
      {
        id: "t04",
        no: "04",
        image: teeStoneBarn,
        alt: "Male model seated in a barn doorway wearing a stone beige oversized tee",
        garment: "Oversized tee with patch pocket",
        color: "Stone beige",
        front: "Chest patch pocket with a small tonal mark above it.",
        back: "Faint washed-out yoke print, barely readable in daylight.",
        placement: "Chest mark above pocket; nape mark at back collar.",
        fabric: "400gsm cotton, pigment dye, frayed sleeve openings, boxy fit.",
        campaign: "Doorway",
        concept:
          "Seated portrait in a barn doorway, hard light outside and black behind. Working-day styling, no accessories, no motion.",
        shots: ["Seated centered portrait", "Hands and pocket detail", "Video: static frame, model breathing"],
      },
      {
        id: "t05",
        no: "05",
        image: teeSandField,
        alt: "Female model in a sand cream tee standing in a golden field",
        garment: "Oversized tee, tucked",
        color: "Sand cream",
        front: "Clean. Reads as a blank when tucked.",
        back: "Nape mark only, sitting just below the collar seam.",
        placement: "Back neck, tonal thread, no chest hit.",
        fabric: "320gsm cotton, soft wash, boxy body cut long enough to tuck without bulk.",
        campaign: "Golden Hour",
        concept:
          "Dry field at sunset, one model, brown wide-leg trousers. Warm and slow. The tee is styled as a base layer, which sells it as everyday rather than statement.",
        shots: ["Back three-quarter in grass", "Profile with sun flare", "Video: grass moving, model still"],
      },
      {
        id: "t06",
        no: "06",
        image: teeWashedGreyRooftop,
        alt: "Male model on a rooftop at dusk in a washed grey oversized tee",
        garment: "Oversized tee",
        color: "Washed grey",
        front: "Blank front, distressed collar edge.",
        back: "Small hem-level type block, low and off-center.",
        placement: "Left hem, tonal print, under 4 cm.",
        fabric: "400gsm cotton, cold wash, distressed collar and hem, wide body.",
        campaign: "Blue Hour",
        concept:
          "Rooftop at dusk, city soft behind. Cool light against warm skin. This is the city half of the campaign that balances the rural frames.",
        shots: ["Full body against skyline", "Hem detail at low angle", "Video: city sound, static frame"],
      },
    ],
  },
  {
    id: "sleeveless",
    title: "Sleeveless and muscle shirts",
    intro:
      "Raw-cut armholes, unfinished hems, heavy cotton that holds shape. Cut to be worn alone or layered under an open shirt.",
    concepts: [
      {
        id: "m01",
        no: "07",
        image: muscleFadedBlackStudio,
        alt: "Male model in a faded black raw-cut sleeveless shirt in studio light",
        garment: "Raw-cut muscle shirt",
        color: "Faded black",
        front: "Clean chest, tonal-on-tonal wave at the heart position.",
        back: "Blank.",
        placement: "Left chest, matte black print on faded black body.",
        fabric: "300gsm cotton, cut-off armholes left to fray, straight body.",
        campaign: "Cut Clean",
        concept:
          "Hard side light on grey seamless. Sculptural, quiet, no styling noise. Built for the drop announcement frame.",
        shots: ["Front torso, hard side light", "Armhole edge close-up", "Video: light sweep across the body"],
      },
      {
        id: "m02",
        no: "08",
        image: muscleStoneStucco,
        alt: "Female model against a stucco wall in a stone beige raw-cut tank",
        garment: "Cropped raw-cut tank",
        color: "Stone",
        front: "Blank, scoop neck.",
        back: "Small nape mark.",
        placement: "Back neck only. Nothing on the front.",
        fabric: "280gsm cotton, garment dyed, raw cut armholes and hem, slightly cropped.",
        campaign: "Wall Light",
        concept:
          "Late sun on a stucco wall, model leaning, one long shadow. Shot for the women's cut without changing the palette or the tone.",
        shots: ["Half body against wall", "Shadow-only frame", "Video: sun moving across the wall"],
      },
      {
        id: "m03",
        no: "09",
        image: muscleRawEdgeDetail,
        alt: "Close-up of a frayed raw-cut armhole on heavyweight cotton",
        garment: "Raw-cut muscle shirt",
        color: "Bone",
        front: "Detail study, no graphic.",
        back: "Not shown.",
        placement: "None. This frame sells the construction, not the mark.",
        fabric: "300gsm cotton, single-needle side seam, hand-cut armhole left raw.",
        campaign: "Made Rough",
        concept:
          "Macro series on how the pieces are finished. Runs as a three-frame carousel next to the product page.",
        shots: ["Armhole macro", "Side seam macro", "Video: thread moving in a draft"],
      },
      {
        id: "m04",
        no: "10",
        image: muscleEspressoLayeredBack,
        alt: "Male model from behind in an espresso sleeveless shirt layered over a cream tee",
        garment: "Sleeveless overlay + long tee",
        color: "Espresso over cream",
        front: "Open, unbranded overlay.",
        back: "Two-layer hem line is the graphic. Nothing printed.",
        placement: "Hem tab on the under-layer, visible only when layered.",
        fabric: "Overlay 300gsm, under-layer 380gsm long body, both garment dyed.",
        campaign: "Two Layers",
        concept:
          "Fence line at golden hour. The shot exists to teach the layering, which is how most people will actually wear the sleeveless piece.",
        shots: ["Back full body at fence", "Layer hem detail", "Video: walking, layers separating"],
      },
      {
        id: "m05",
        no: "11",
        image: muscleWashedGreyFlatlay,
        alt: "Washed grey sleeveless shirt flat on cream linen",
        garment: "Raw-cut muscle shirt",
        color: "Washed grey",
        front: "Blank.",
        back: "Blank.",
        placement: "Interior neck print only.",
        fabric: "300gsm cotton, stone wash, frayed armholes, coverstitch hem.",
        campaign: "Stock",
        concept:
          "Second half of the catalogue set. Cream linen, natural overhead light, hard shadow across one corner.",
        shots: ["Flat lay top-down", "Corner shadow crop", "Video: cloth pulled flat by hand"],
      },
      {
        id: "m06",
        no: "12",
        image: muscleCreamDuoStudio,
        alt: "Male and female models in cream raw-cut sleeveless shirts on a cream backdrop",
        garment: "Raw-cut muscle shirt, both cuts",
        color: "Cream",
        front: "Blank on both cuts.",
        back: "Blank.",
        placement: "Nape mark only, same position on both cuts.",
        fabric: "300gsm cotton, natural undyed cream, raw armholes.",
        campaign: "Same Piece",
        concept:
          "One piece, two cuts, one frame. Cream on cream, even light, both models still. Runs as the sizing and fit story.",
        shots: ["Two-up full body", "Side-by-side fit comparison", "Video: both models turning once"],
      },
    ],
  },
  {
    id: "washed-vintage",
    title: "Washed and vintage finishes",
    intro:
      "Pieces built to look kept, not new. Sun-fade, uneven dye lots, prints cracked on purpose.",
    concepts: [
      {
        id: "v01",
        no: "13",
        image: vintageEspressoBackPrint,
        alt: "Male model from behind in a sun-faded espresso tee in a concrete corridor",
        garment: "Oversized tee",
        color: "Faded espresso",
        front: "Blank.",
        back: "Full-width tonal back panel print, one tone darker, heavily cracked.",
        placement: "Back panel, shoulder to mid-back. No front hit.",
        fabric: "400gsm cotton, over-dyed then sun-faded, soft hand.",
        campaign: "Corridor",
        concept:
          "Long empty corridor, model walking away, daylight at the far end. Repetition and quiet. Reads as film still more than ad.",
        shots: ["Back full body in corridor", "Print crack macro", "Video: long lens walk-away"],
      },
      {
        id: "v02",
        no: "14",
        image: vintageWashedGreyField,
        alt: "Female model in a washed grey oversized tee beside a weathered barn",
        garment: "Oversized tee",
        color: "Washed grey",
        front: "Blank front, uneven wash is the pattern.",
        back: "Blank.",
        placement: "Hem tab, right side seam.",
        fabric: "400gsm cotton, acid-free stone wash, patchy fade, dropped shoulder.",
        campaign: "Kept",
        concept:
          "Overcast light, weathered barn, dry grass. Flat sky keeps the grey honest. The story is a shirt that has been kept for years.",
        shots: ["Straight-on full body", "Wash variation close-up", "Video: overcast wind, static frame"],
      },
      {
        id: "v03",
        no: "15",
        image: vintageStackStillLife,
        alt: "Three folded heavyweight tees stacked on a wooden table",
        garment: "Tee set, three colorways",
        color: "Cream, stone, faded black",
        front: "Folded product study.",
        back: "Not shown.",
        placement: "None visible. Reads as fabric and dye lots.",
        fabric: "Same body across three dye lots, each washed to a different depth.",
        campaign: "Three Lots",
        concept:
          "Dark table, single warm light, folded stack. Used to explain the color story without a model in frame.",
        shots: ["Stack straight-on", "Top-down of folded edges", "Video: hand placing the top shirt"],
      },
      {
        id: "v04",
        no: "16",
        image: vintageCreamLongsleeveLayer,
        alt: "Male model in a cream oversized long sleeve tee in a warm doorway",
        garment: "Oversized long sleeve tee",
        color: "Cream",
        front: "Blank, wide crew collar.",
        back: "Small nape mark.",
        placement: "Back neck, tonal, plus interior hem stamp.",
        fabric: "420gsm cotton, brushed inside, distressed cuffs, long boxy body.",
        campaign: "Warm Room",
        concept:
          "Interior doorway, warm bounce light, nothing else in the frame. Positions the long sleeve as the cold-weather base.",
        shots: ["Standing portrait in doorway", "Cuff detail", "Video: model stepping through the door"],
      },
      {
        id: "v05",
        no: "17",
        image: vintageFabricMacro,
        alt: "Macro of cream heavyweight cotton jersey",
        garment: "Fabric study",
        color: "Cream",
        front: "Texture only.",
        back: "Not shown.",
        placement: "None.",
        fabric: "400gsm loop-back jersey, open-end yarn, visible weave.",
        campaign: "The Cloth",
        concept:
          "Opening frame for the drop email and the product page hero strip. No garment, no model, just what the piece is made of.",
        shots: ["Macro fold", "Raking-light weave", "Video: slow fabric drift"],
      },
      {
        id: "v06",
        no: "18",
        image: vintageFadedBlackSteps,
        alt: "Female model seated on stone steps at dusk in a faded black distressed tee",
        garment: "Oversized tee, distressed hem",
        color: "Faded black",
        front: "Blank.",
        back: "Small tonal shoulder mark.",
        placement: "Right shoulder blade, tonal print.",
        fabric: "380gsm cotton, over-dye then wash-back, hand-distressed hem.",
        campaign: "Stone Steps",
        concept:
          "Blue hour on stone steps, seated, relaxed. Warm skin against cool light. The most editorial frame in the set.",
        shots: ["Seated wide", "Hem distress close-up", "Video: light falling, model still"],
      },
    ],
  },
  {
    id: "placements",
    title: "Logo and placement studies",
    intro:
      "Where the mark sits. Tonal, small, and always secondary to the garment. The official wave is used as supplied, never redrawn or recolored beyond a single tonal thread.",
    concepts: [
      {
        id: "d01",
        no: "19",
        image: detailNapeEmbroideryCream,
        alt: "Close-up of a small tonal embroidered mark below the back collar of a cream tee",
        garment: "Placement study, back neck",
        color: "Cream",
        front: "No front mark.",
        back: "Wave mark embroidered 3 cm below the collar seam.",
        placement: "Nape, tonal thread, 2 cm wide.",
        fabric: "400gsm cotton, ribbed collar, taped shoulder seam.",
        campaign: "Quiet Mark",
        concept:
          "Detail series showing that the branding lives where only the wearer knows it. Used across the site as section breaks.",
        shots: ["Nape macro", "Over-shoulder crop", "Video: collar turning in light"],
      },
      {
        id: "d02",
        no: "20",
        image: detailHemTabFadedBlack,
        alt: "Close-up of a woven hem tab on a faded black tee",
        garment: "Placement study, hem",
        color: "Faded black",
        front: "No front mark.",
        back: "None.",
        placement: "Woven tab in the left side hem, black on black.",
        fabric: "380gsm cotton, coverstitch hem, over-dyed.",
        campaign: "Quiet Mark",
        concept: "Second frame of the placement series. Reads as construction rather than branding.",
        shots: ["Hem tab macro", "Side seam full length", "Video: hem swinging"],
      },
      {
        id: "d03",
        no: "21",
        image: detailShoulderSeamWashedGrey,
        alt: "Close-up of the sleeve and shoulder seam on a washed grey tee",
        garment: "Placement study, sleeve",
        color: "Washed grey",
        front: "No front mark.",
        back: "None.",
        placement: "Small square tonal patch on the outer sleeve, above the hem.",
        fabric: "400gsm cotton, stone wash, dropped shoulder seam.",
        campaign: "Quiet Mark",
        concept: "Third frame. Shows the sleeve option for pieces that stay blank at chest and back.",
        shots: ["Sleeve macro", "Shoulder seam raking light", "Video: arm lifting slowly"],
      },
    ],
  },
  {
    id: "campaign",
    title: "Campaign frames",
    intro: "Full campaign directions built around WEAR THE STORY. Same palette, same restraint, different weather.",
    concepts: [
      {
        id: "c01",
        no: "22",
        image: campaignDawnRoadWide,
        alt: "Model walking a gravel road at dawn in a cream tee and dark trousers",
        garment: "Oversized cream tee, wide trousers",
        color: "Cream and faded black",
        front: "Blank.",
        back: "Blank.",
        placement: "Chest mark only, invisible at this distance, which is the point.",
        fabric: "400gsm cotton, soft wash.",
        campaign: "Wear the Story",
        concept:
          "Hero frame for the drop. Gravel road, mist, one figure. Wide, cinematic, quiet. Type sits in the empty left half of the frame in campaign layouts.",
        shots: ["Wide with negative space", "Mid walking crop", "Video: 10 second dolly, no music"],
      },
      {
        id: "c02",
        no: "23",
        image: campaignChestCropStone,
        alt: "Male model in warm window light wearing a stone raw-cut sleeveless layer",
        garment: "Sleeveless overlay, layered",
        color: "Stone and cream",
        front: "Open front, patch pocket, no graphic.",
        back: "Blank.",
        placement: "Interior label only.",
        fabric: "Slub cotton overlay, 300gsm sleeveless base.",
        campaign: "Warm Window",
        concept:
          "Tight portrait, morning window light, one model. Used across email and paid where the crop has to work small.",
        shots: ["Chest-up crop", "Hand on collar", "Video: light shifting across the shoulder"],
      },
      {
        id: "c03",
        no: "24",
        image: campaignQuietRoomGrey,
        alt: "Female model in an empty warm room wearing a long washed grey tee",
        garment: "Long tee, dress length",
        color: "Washed grey",
        front: "Blank.",
        back: "Nape mark.",
        placement: "Back neck only.",
        fabric: "400gsm cotton, long boxy body, hand-distressed hem.",
        campaign: "Empty Room",
        concept:
          "One window, wooden floor, nothing else. The room does the styling. Pairs with the dawn road frame as the interior counterpart.",
        shots: ["Full room wide", "Hem and floor shadow", "Video: static wide, dust in the light"],
      },
      {
        id: "c04",
        no: "25",
        image: campaignClayWallGroup,
        alt: "Group of models against a clay wall at golden hour in neutral tees and tanks",
        garment: "Full range, mixed cuts",
        color: "Cream, espresso, stone, faded black",
        front: "Mixed. Two blanks, one tonal chest mark, one washed tank.",
        back: "Not shown in this frame.",
        placement: "Chest and nape across the group, never more than one visible mark per person.",
        fabric: "Full drop, all garment dyed in the same run.",
        campaign: "Wear the Story",
        concept:
          "Closing group frame. Clay wall, low sun, four people standing as they would anyway. Sells the range in one image and anchors the campaign homepage.",
        shots: ["Group wide", "Two-person crop", "Video: group holding still, wind only"],
      },
    ],
  },
];

export const conceptCount = groups.reduce((n, g) => n + g.concepts.length, 0);
