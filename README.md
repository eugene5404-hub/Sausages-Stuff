# Sausages & Stuff

From-scratch sausage recipe PWA.

## Meat & fat composition
Each recipe can contain any number of meat/fat ingredients. Each ingredient has a percentage and the total must equal 100%.

Example:
- Pork shoulder 70%
- Pork back fat 30%

Batch scaling calculates the actual grams for every component.

Salt and seasonings are stored in g/kg and liquids in ml/kg based on total meat + fat weight. Enter salt and seasonings for the batch when creating a recipe; they are normalized to 1 kg when saved.

Fresh-sausage formulas only in this version; curing salts and validated cured/fermented processes are not calculated.


## v7 update
- Common meat/fat ingredients now use an alphabetical dropdown.
- Custom is the final option for any meat or fat not listed.
- Salt remains normalized to g/kg when a recipe is saved.
- Service worker cache bumped to v7.
