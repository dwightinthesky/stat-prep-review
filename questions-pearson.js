// ══════════════════════════════════════════════════════
// PEARSON MOCK — CURATED: 3 per topic × 10 topics = 30 Q
// ══════════════════════════════════════════════════════
const pearsonQuestions = [

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 1: Statistics Basics / Data Types         ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p1', num:1, topic:'Statistics Basics',
    type:'Descriptive vs Inferential',
    text:'Explain the difference between descriptive and inferential statistics.',
    options:[
      'A) Descriptive statistics predicts future outcomes; inferential statistics describes data.',
      'B) Both are the same thing.',
      'C) Descriptive statistics uses samples; inferential statistics uses populations.',
      'D) Descriptive statistics describes sets of data. Inferential statistics draws conclusions about the sets of data based on sampling.'
    ],
    answer:'D',
    solution:'Descriptive statistics summarises/describes the data you already have (charts, tables, averages).\n\nInferential statistics uses a SAMPLE to draw conclusions about a larger POPULATION.\n\n⚠ Key distinction: descriptive = describe what you SEE; inferential = predict/generalise to what you DON\'T see.',
    cheatsheet:'§1 Statistics Basics:\n• Descriptive: Summarises data you have (charts, x̄, s).\n• Inferential: Uses SAMPLE → conclusions about POPULATION.\n• Population = all items of interest; Sample = subset.'
  },
  {
    id:'p3', num:2, topic:'Statistics Basics',
    type:'Qualitative vs Quantitative',
    text:'Suppose you\'re given a data set that classifies each sample unit into one of four categories: A, B, C, or D.\n\nPart 1: Are A, B, C, D qualitative or quantitative?\nPart 2: After coding them as 1, 2, 3, 4, are they qualitative or quantitative?',
    subQuestions:[
      {label:'Part 1)', text:'A, B, C, D — qualitative or quantitative?', answer:'qualitative'},
      {label:'Part 2)', text:'After coding as 1, 2, 3, 4?', answer:'qualitative'}
    ],
    solution:'Part 1: Qualitative — they are categories.\nPart 2: STILL qualitative — the numbers are only labels.\n\n⚠ TRAP: Coding categories as numbers (1,2,3,4) does NOT make them quantitative! Arithmetic on these codes is meaningless (e.g. "A + B = C" makes no sense).',
    cheatsheet:'§2 Types of Data:\n• Qualitative (Categorical): Labels/categories.\n• Quantitative: Numbers where arithmetic is meaningful.\n  – Discrete: countable (e.g. # of students)\n  – Continuous: measured (e.g. weight, temperature)\n\n⚠ Coding A=1, B=2 → STILL qualitative!'
  },
  {
    id:'p4', num:3, topic:'Statistics Basics',
    type:'Survey Design',
    text:'Pollsters regularly conduct opinion polls to determine the popularity rating of the current president.\n\na. Identify the relevant population.\nb(1). What is the variable of interest? b(2). Quantitative or qualitative?\nc. What is the sample?\nd. What method of data collection is employed?',
    subQuestions:[
      {label:'a)', text:'Relevant population?', answer:'all citizens'},
      {label:'b(1))', text:'Variable of interest?', answer:'opinion/approval rating'},
      {label:'b(2))', text:'Quantitative or qualitative?', answer:'qualitative'},
      {label:'c)', text:'Sample?', answer:'those polled by telephone'},
      {label:'d)', text:'Data collection method?', answer:'survey'}
    ],
    solution:'a. All citizens of the country (the entire group of interest)\nb(1). Whether citizen believes president is doing a good job\nb(2). Qualitative — it\'s a categorical response (approve/disapprove)\nc. Citizens actually polled by telephone\nd. Survey\n\n⚠ Telephone polling may not be representative (undercoverage bias — excludes those without phones).',
    cheatsheet:'§1 Data Collection Methods:\n• Survey: poll / questionnaire / interview\n• Observational: watch, no interference — ✗ cannot prove causation\n• Experiment: assign treatments + control — ✓ CAN prove causation\n• Census: measure ALL of population\n\n⚠ Undercoverage: some groups excluded from sample → bias'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 2a: Data Visualization                    ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p5', num:4, topic:'Data Visualization',
    type:'Pareto Diagram',
    text:'Shopping mall tenants. Data from 127 malls housing 1,922 stores.<br>Tenants categorised by floor space:<br><br><table class="data-table"><tr><th>Category</th><th>Code</th><th>Count</th></tr><tr><td>Anchor (>30,000 sq ft)</td><td>A</td><td>750</td></tr><tr><td>Major space (10,000–30,000)</td><td>MS</td><td>72</td></tr><tr><td>Large standard (4,000–10,000)</td><td>LS</td><td>244</td></tr><tr><td>Small standard (1,500–4,000)</td><td>SS</td><td>827</td></tr><tr><td>Small (<1,500 sq ft)</td><td>S</td><td>29</td></tr></table><br>Part 1: Which Pareto diagram is correct?<br>  A. Bars ordered: S, MS, LS, A, SS  (ascending)<br>  B. Bars ordered: A, SS, S, MS, LS<br>  C. Bars ordered: LS, S, MS, SS, A<br>  D. Bars ordered: SS, A, LS, MS, S  (descending)<br><br>Part 2: Interpret the Pareto diagram.',
    subQuestions:[
      {label:'Part 1)', text:'Correct Pareto diagram? (A/B/C/D)', answer:'D'},
      {label:'Part 2)', text:'Interpretation? (A/B/C/D)\nA. Few stores are large standard or small standard.\nB. Most stores are small standard or small.\nC. Few stores are anchor or major space.\nD. Most stores are small standard or anchor.', answer:'D'}
    ],
    solution:'Part 1: D — A Pareto diagram orders bars from HIGHEST to LOWEST frequency.\n  SS = 827 > A = 750 > LS = 244 > MS = 72 > S = 29\n  → Correct order: SS, A, LS, MS, S ✓\n\nPart 2: D — Most stores are small standard tenants (827) or anchor tenants (750).\n  Together: 827 + 750 = 1,577 out of 1,922 = 82% of all stores.\n\n⚠ Pareto principle (80/20 rule): ~80% of data often falls in ~20% of categories.\n⚠ A Pareto chart MUST have bars in descending order — that is what distinguishes it from a regular bar chart!',
    cheatsheet:'§6 Pareto Diagram:\n• Bars ordered from HIGHEST to LOWEST frequency\n• Used to identify the \"vital few\" categories\n• Pareto principle: ~80% of effects from ~20% of causes\n\n⚠ Pareto ≠ regular bar chart!\n  Pareto = descending order\n  Bar chart = any order'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 2b: Descriptive Stats / Z-score           ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p9', num:5, topic:'Descriptive Stats',
    type:'Percentiles',
    text:'Math assessment scores:\n• Mean = 276\n• 10th percentile = 230\n• 25th percentile = 250\n• 75th percentile = 310\n• 90th percentile = 322\n\nInterpret the mean and each percentile.',
    subQuestions:[
      {label:'', text:'10th percentile: what % scored below 230?', answer:'10'},
      {label:'', text:'90th percentile: what % scored below 322?', answer:'90'},
      {label:'', text:'IQR = Q3 − Q1 = ?', answer:'60'}
    ],
    solution:'Mean = 276: The average score is 276.\n\n10th percentile = 230: 10% scored below 230, 90% scored above.\n25th percentile = 250: 25% below, 75% above.\n75th percentile = 310: 75% below, 25% above.\n90th percentile = 322: 90% below, 10% above.\n\nIQR = Q3 − Q1 = 310 − 250 = 60',
    cheatsheet:'§5 Percentiles:\n• pth percentile: p% of data fall BELOW this value.\n• Q1 = 25th, Q2 = 50th (Median), Q3 = 75th\n• IQR = Q3 − Q1 (interquartile range)\n• Outlier: beyond Q1 − 1.5·IQR or Q3 + 1.5·IQR'
  },
  {
    id:'p10', num:6, topic:'Descriptive Stats',
    type:'Z-Score / Unusual Values',
    text:'Transformers: sags and swells.\n\na. Is 197 sags unusual? (μ = 323, σ = 38)\nb. Is 195 swells unusual? (μ = 146, σ = 30)',
    subQuestions:[
      {label:'a)', text:'z for 197 sags = ? Is it unusual?', answer:'-3.32, yes unusual'},
      {label:'b)', text:'z for 195 swells = ? Is it unusual?', answer:'1.63, not unusual'}
    ],
    solution:'a. z = (197 − 323) / 38 = −3.32\n   |z| = 3.32 > 2 → YES, unusual ✓\n\nb. z = (195 − 146) / 30 = 1.63\n   |z| = 1.63 < 2 → NO, not unusual ✗\n\nRule: |z| > 2 → unusual (outside 95% of data)\n       |z| > 3 → very unusual (outside 99.7%)',
    cheatsheet:'§5 Z-Score:\nz = (x − x̄) / s  or  z = (x − μ) / σ\n\n• |z| > 2 → unusual (only ~5% of data)\n• |z| > 3 → very unusual (<0.3% of data)\n\n68-95-99.7 Rule:\n→ 68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ'
  },
  {
    id:'p7', num:7, topic:'Descriptive Stats',
    text:'Golf driving performance index. Twenty observations:<br><br><table class="data-table"><tr><td>1.23</td><td>2.86</td><td>1.66</td><td>1.99</td><td>1.31</td><td>1.41</td><td>1.77</td><td>2.91</td><td>2.56</td><td>1.41</td></tr><tr><td>3.43</td><td>2.34</td><td>3.29</td><td>1.41</td><td>2.01</td><td>1.23</td><td>2.47</td><td>2.14</td><td>2.18</td><td>1.39</td></tr></table><br>a. Find the mean.<br>b. Find the median.<br>c. Find the mode.<br>d. Which measure best describes the data? Why?<br>e. Is the distribution skewed? If yes, in what direction?',
    subQuestions:[
      {label:'a)', text:'Mean = ?', answer:'2.05'},
      {label:'b)', text:'Median = ?', answer:'2.00'},
      {label:'c)', text:'Mode = ?', answer:'1.41'},
      {label:'d)', text:'Which measure is best?', answer:'median'},
      {label:'e)', text:'Skew direction?', answer:'right skewed'}
    ],
    solution:'Sorted: 1.23, 1.23, 1.31, 1.39, 1.41, 1.41, 1.41, 1.66, 1.77, 1.99, 2.01, 2.14, 2.18, 2.34, 2.47, 2.56, 2.86, 2.91, 3.29, 3.43\n\na. Mean = (1.23+2.86+1.66+...+1.39) / 20 = 41.00 / 20 = 2.050\n\nb. Median = average of 10th & 11th values = (1.99 + 2.01) / 2 = 2.000\n\nc. Mode = 1.41 (appears 3 times)\n\nd. Median is best — it is resistant to the extreme values (3.43, 3.29).\n\ne. Mean (2.05) > Median (2.00) > Mode (1.41) → RIGHT-SKEWED\n\n⚠ Key pattern:\n  Right-skewed: Mean > Median > Mode  (tail pulls mean RIGHT)\n  Left-skewed:  Mean < Median < Mode  (tail pulls mean LEFT)\n  Symmetric:    Mean ≈ Median ≈ Mode',
    cheatsheet:'§3 Measures of Centre:\n• Mean: x̄ = Σxᵢ/n — sensitive to outliers\n• Median: middle value — RESISTANT to outliers\n• Mode: most frequent value\n\n§4 Skewness:\n• Right-skewed: Mean > Median (tail →)\n• Left-skewed: Mean < Median (← tail)\n• Symmetric: Mean ≈ Median\n\n⚠ Use Median when data is skewed or has outliers!'
  },
  {
    id:'p32', num:8, topic:'Descriptive Stats',
    type:'IQR / Normality Check',
    text:'Given s = 192, Q_L = 77, Q_U = 200.\n\na. IQR = ?\nb. IQR / s = ?\nc. Is the data approximately normal?',
    subQuestions:[
      {label:'a)', text:'IQR = ?', answer:'123'},
      {label:'b)', text:'IQR / s = ?', answer:'0.641'},
      {label:'c)', text:'Approximately normal? (yes/no)', answer:'no'}
    ],
    solution:'a. IQR = Q_U − Q_L = 200 − 77 = 123\nb. IQR / s = 123 / 192 = 0.641\nc. For normal data, IQR/s ≈ 1.3.\n   Here 0.641 is much less than 1.3 → data is NOT approximately normal.\n\n⚠ This is a quick normality check — if IQR/s is far from 1.3, suspect non-normality.',
    cheatsheet:'§23 Checking Normality:\n• IQR/s ≈ 1.3 → approximately normal\n• Much different from 1.3 → NOT normal\n• Also check: histogram (bell-shaped?), 68-95-99.7 rule\n• |z| > 2: unusual, |z| > 3: outlier'
  },

  {
    id:'p8', num:9, topic:'Descriptive Stats',
    type:'Range / SD / Variability',
    text:'Sandstone permeability. Slices tested under three conditions:<br><br><table class="data-table"><tr><th>Variable</th><th>N</th><th>StDev</th><th>Variance</th><th>Min</th><th>Max</th><th>Range</th></tr><tr><td>PermA</td><td>100</td><td>14.87</td><td>221.19</td><td>54.40</td><td>120.70</td><td>66.30</td></tr><tr><td>PermB</td><td>100</td><td>22.22</td><td>493.56</td><td>50.80</td><td>150.40</td><td>99.60</td></tr><tr><td>PermC</td><td>100</td><td>20.49</td><td>419.74</td><td>53.20</td><td>129.40</td><td>76.20</td></tr></table><br>a. Find the range for Group A. Verify using Min and Max.<br>b. Find the SD for Group A. Verify using the variance.<br>c. Which condition (A, B, or C) has the most variable data?',
    subQuestions:[
      {label:'a)', text:'Range for Group A = ?', answer:'66.30'},
      {label:'', text:'Verify: Max − Min = ?', answer:'120.70 - 54.40 = 66.30'},
      {label:'b)', text:'SD for Group A = ?', answer:'14.87'},
      {label:'', text:'Verify: √Variance = √221.19 = ?', answer:'14.87'},
      {label:'c)', text:'Most variable condition?', answer:'B'}
    ],
    solution:'a. Range(A) = Max − Min = 120.70 − 54.40 = 66.30 ✓\n\nb. SD(A) = √Variance = √221.19 = 14.87 ✓\n   (Variance = SD² = 14.87² = 221.12 ≈ 221.19)\n\nc. Condition B has the MOST variable data:\n   • Highest SD: 22.22\n   • Highest Variance: 493.56\n   • Highest Range: 99.60\n\n⚠ Use SD (or variance) to compare variability — NOT range alone!\n   Range is sensitive to outliers; SD uses ALL observations.',
    cheatsheet:'§4 Measures of Spread:\n• Range = Max − Min (sensitive to outliers)\n• Variance: s² = Σ(xᵢ−x̄)² / (n−1)\n• SD: s = √(s²)\n• SD > Range/4  → may have outliers\n\n⚠ SD is preferred over Range because it uses ALL data points.\n⚠ Variance = SD², so s = √(Var)'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 2c: Contingency Tables                    ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p12', num:10, topic:'Contingency Tables',
    type:'Two-way Table Proportions',
    text:'Travel professionals survey. 284 total (96 males, 188 females).<br>Opinion on salary fairness:<br><br><table class="data-table"><tr><th></th><th>Males</th><th>Females</th></tr><tr><th>Salary too low</th><td>30</td><td>99</td></tr><tr><th>Equitable/fair</th><td>56</td><td>66</td></tr><tr><th>Paid well</th><td>10</td><td>23</td></tr><tr><th>TOTALS</th><td>96</td><td>188</td></tr></table><br>a. Compare proportions who believe salary is too low (male vs female).<br>b. Compare proportions who believe salary is equitable/fair.<br>c. Compare proportions who believe they are paid well.<br>d. Do opinions on salary fairness differ by gender?',
    subQuestions:[
      {label:'a)', text:'Proportion male "too low" = ?', answer:'0.313'},
      {label:'', text:'Proportion female "too low" = ?', answer:'0.527'},
      {label:'b)', text:'Proportion male "equitable/fair" = ?', answer:'0.583'},
      {label:'', text:'Proportion female "equitable/fair" = ?', answer:'0.351'},
      {label:'c)', text:'Proportion male "paid well" = ?', answer:'0.104'},
      {label:'', text:'Proportion female "paid well" = ?', answer:'0.122'},
      {label:'d)', text:'Opinions differ by gender? (yes/no)', answer:'yes'}
    ],
    solution:'a. Male "too low": 30/96 = 0.313\n   Female "too low": 99/188 = 0.527\n   → Females much more likely to think salary is too low.\n\nb. Male "equitable/fair": 56/96 = 0.583\n   Female "equitable/fair": 66/188 = 0.351\n   → Males much more likely to think salary is fair.\n\nc. Male "paid well": 10/96 = 0.104\n   Female "paid well": 23/188 = 0.122\n   → Similar proportions (females slightly higher).\n\nd. YES — There are noticeable differences between proportions of males and females on all 3 levels.\n\n⚠ To compare groups in a contingency table, always use PROPORTIONS (not raw counts)!\n   Raw counts are misleading when group sizes differ (96 vs 188).',
    cheatsheet:'§25 Contingency Tables:\n• Row proportions = cell / row total\n• Column proportions = cell / column total\n\n⚠ NEVER compare raw counts when group sizes differ!\n   Always compare PROPORTIONS.\n\nChi-square test:\n• H₀: variables are independent\n• Expected = (row total × col total) / grand total\n• χ² = Σ(O−E)²/E'
  },

  {
    id:'p11', num:11, topic:'Contingency Tables',
    type:'Expected Counts / Chi-Square / Cramér\'s V',
    text:'2×3 contingency table:<br><br><table class="data-table"><tr><th></th><th>Col 1</th><th>Col 2</th><th>Col 3</th></tr><tr><th>Row 1</th><td>8</td><td>32</td><td>55</td></tr><tr><th>Row 2</th><td>19</td><td>26</td><td>25</td></tr></table><br>a. Find all expected cell counts (E₁₁, E₁₂, E₁₃, E₂₁, E₂₂, E₂₃).<br>b. Calculate χ².<br>c. Calculate Cramér\'s V coefficient.',
    subQuestions:[
      {label:'a)', text:'E₁₁ = ?', answer:'15.545'},
      {label:'', text:'E₁₂ = ?', answer:'33.394'},
      {label:'', text:'E₁₃ = ?', answer:'46.061'},
      {label:'', text:'E₂₁ = ?', answer:'11.455'},
      {label:'', text:'E₂₂ = ?', answer:'24.606'},
      {label:'', text:'E₂₃ = ?', answer:'33.939'},
      {label:'b)', text:'χ² = ?', answer:'12.857'},
      {label:'c)', text:'Cramér\'s V = ?', answer:'0.279'}
    ],
    solution:'Row totals: R1 = 8+32+55 = 95, R2 = 19+26+25 = 70\nCol totals: C1 = 27, C2 = 58, C3 = 80\nGrand total = 165\n\nExpected = (Row total × Col total) / Grand total:\nE₁₁ = 95×27/165 = 15.545\nE₁₂ = 95×58/165 = 33.394\nE₁₃ = 95×80/165 = 46.061\nE₂₁ = 70×27/165 = 11.455\nE₂₂ = 70×58/165 = 24.606\nE₂₃ = 70×80/165 = 33.939\n\nχ² = Σ(O−E)²/E\n  = (8−15.545)²/15.545 + (32−33.394)²/33.394 + (55−46.061)²/46.061\n  + (19−11.455)²/11.455 + (26−24.606)²/24.606 + (25−33.939)²/33.939\n  = 3.662 + 0.058 + 1.735 + 4.969 + 0.079 + 2.354\n  = 12.857\n\nCramér\'s V = √(χ²/(n·min(r−1,c−1)))\n  = √(12.857/(165·1)) = √0.0779 = 0.279\n\n⚠ V ranges from 0 to 1. Here V=0.279 suggests a moderate association.',
    cheatsheet:'§25 Chi-Square Test:\nExpected = (row total × col total) / grand total\nχ² = Σ(O−E)²/E\ndf = (r−1)(c−1)\n\nCramér\'s V = √(χ²/(n·min(r−1,c−1)))\n• V=0: no association\n• V=1: perfect association\n• V<0.1: weak, 0.1-0.3: moderate, >0.3: strong'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 3: Regression                             ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p14', num:12, topic:'Regression',
    type:'Predictor vs Response',
    text:'CEO age and salary-to-worker-pay ratio.\n\nWhich is the predictor variable and which is the response variable?',
    options:[
      "A) Predictor = salary ratio, Response = age",
      "B) Predictor = worker pay, Response = CEO salary",
      "C) Predictor = CEO's age, Response = ratio of CEO salary to worker pay",
      "D) Both are predictor variables"
    ],
    answer:'C',
    solution:'Predictor (x) = CEO\'s age — the variable we use to PREDICT\nResponse (y) = ratio of CEO salary to worker pay — what we want to PREDICT\n\n⚠ Think: "Does X influence Y?" Age may influence the pay ratio, not the other way around.',
    cheatsheet:'§ Regression Basics:\n• Predictor (independent variable, x): used to predict\n• Response (dependent variable, y): being predicted\n• ŷ = β̂₀ + β̂₁x  (least squares line)\n• β̂₀ = y-intercept, β̂₁ = slope'
  },
  {
    id:'p16', num:13, topic:'Regression',
    type:'Regression Interpretation',
    text:'Sit-ins and arrests. Duration (days) vs number of arrests.\nLeast squares equation: ŷ = 2.913 + 7.370x\n\na. Model form?\nb. Interpret the intercept.\nc. Interpret the slope.\nd. For what range of x is the interpretation meaningful?',
    subQuestions:[
      {label:'a)', text:'Model form?', answer:'y = β₀ + β₁x'},
      {label:'b)', text:'Intercept meaning?', answer:'no practical meaning (x=0 outside range)'},
      {label:'c)', text:'Slope meaning?', answer:'each additional day → +7.370 predicted arrests'},
      {label:'d)', text:'Valid range of x?', answer:'1 to 4 days'}
    ],
    solution:'a. y = β₀ + β₁x\nb. β̂₀ = 2.913: NO practical meaning — x = 0 (0 days) is outside the observed range.\nc. β̂₁ = 7.370: Each additional day increases predicted arrests by 7.370.\nd. Only meaningful for x = 1 to 4 days (the sample range).\n\n⚠ EXTRAPOLATION: predicting outside sample range → unreliable!\n⚠ When x = 0 is outside data range, intercept has no practical meaning.',
    cheatsheet:'§ Regression Interpretation:\n• β̂₁ (slope): change in ŷ per one-unit increase in x\n• β̂₀ (intercept): ŷ when x = 0\n  ⚠ If x=0 is outside data range → no practical meaning\n• ⚠ Extrapolation: predicting outside sample x-range is unreliable'
  },
  {
    id:'p17', num:14, topic:'Regression',
    type:'Regression Prediction',
    text:'Software millionaires and birth totals.\nŷ = −19.71 + 0.82x\n\na. Interpret the intercept.\nb. Interpret the slope.\nc. Predict ŷ when x = 26.',
    subQuestions:[
      {label:'a)', text:'Intercept meaning?', answer:'no practical meaning'},
      {label:'b)', text:'Slope meaning?', answer:'+0.82 millionaires per 1M births'},
      {label:'c)', text:'ŷ when x = 26?', answer:'1.61'}
    ],
    solution:'a. Intercept = −19.71: No practical meaning — x = 0 (zero births) is meaningless.\nb. Slope = 0.82: Each additional 1 million births → predicted +0.82 software millionaire birthdays.\nc. ŷ = −19.71 + 0.82(26) = −19.71 + 21.32 = 1.61\n\n⚠ Negative intercept is common and fine — just means the line crosses y-axis below 0.',
    cheatsheet:'§ Regression:\n• ŷ = β̂₀ + β̂₁x\n• Prediction: plug in x, get ŷ\n• Residual = y − ŷ (actual − predicted)\n• ⚠ Only predict within range of observed x values'
  },

  {
    id:'p15', num:15, topic:'Regression',
    type:'Scatterplot & Least Squares',
    text:'Data:<br><br><table class="data-table"><tr><th>x</th><td>5</td><td>4</td><td>−2</td><td>2</td><td>8</td><td>5</td><td>4</td></tr><tr><th>y</th><td>3</td><td>5</td><td>0</td><td>1</td><td>9</td><td>4</td><td>3</td></tr></table><br>a. Construct a scatterplot.<br>b. What does the scatterplot suggest about the relationship?<br>c. Find the least squares line ŷ = β̂₀ + β̂₁x.<br>d. Does the line appear to fit the data well?',
    subQuestions:[
      {label:'b)', text:'Relationship? (positive/negative linear)', answer:'positive linear'},
      {label:'c)', text:'β̂₁ (slope) = ?', answer:'0.838'},
      {label:'', text:'β̂₀ (intercept) = ?', answer:'0.459'},
      {label:'d)', text:'Good fit? (yes/no)', answer:'yes'}
    ],
    solution:'n = 7, Σx = 26, Σy = 25, x̄ = 3.714, ȳ = 3.571\nΣxy = 5(3)+4(5)+(−2)(0)+2(1)+8(9)+5(4)+4(3) = 15+20+0+2+72+20+12 = 141\nΣx² = 25+16+4+4+64+25+16 = 154\n\nβ̂₁ = (nΣxy − ΣxΣy)/(nΣx² − (Σx)²)\n    = (7·141 − 26·25)/(7·154 − 26²)\n    = (987 − 650)/(1078 − 676)\n    = 337/402 = 0.838\n\nβ̂₀ = ȳ − β̂₁x̄ = 3.571 − 0.838(3.714) = 0.459\n\nŷ = 0.459 + 0.838x\n\nb. As x increases, y tends to increase → positive linear relationship.\n\nd. The line fits reasonably well — most points are close to the line.\n\n⚠ The scatterplot shows points rising from left to right with moderate scatter.',
    cheatsheet:'§ Least Squares Regression:\nβ̂₁ = (nΣxy − ΣxΣy) / (nΣx² − (Σx)²)\nβ̂₀ = ȳ − β̂₁x̄\n\nSteps: ① Compute Σx, Σy, Σxy, Σx²\n       ② Plug into formulas\n       ③ ŷ = β̂₀ + β̂₁x\n\nScatterplot patterns:\n• Positive: points rise left→right\n• Negative: points fall left→right\n• No relationship: random scatter'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 4: Probability                            ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p19', num:16, topic:'Probability',
    type:'Probability Laws',
    text:'Given P(B) = 0.5, P(D) = 0.4, P(B ∩ D) = 0.3.\n\na. P(Dᶜ) = ?\nb. P(Bᶜ) = ?\nc. P(B ∪ D) = ?',
    subQuestions:[
      {label:'a)', text:'P(Dᶜ) = ?', answer:'0.6'},
      {label:'b)', text:'P(Bᶜ) = ?', answer:'0.5'},
      {label:'c)', text:'P(B ∪ D) = ?', answer:'0.6'}
    ],
    solution:'a. P(Dᶜ) = 1 − P(D) = 1 − 0.4 = 0.6  ← Complement rule\nb. P(Bᶜ) = 1 − P(B) = 1 − 0.5 = 0.5\nc. P(B ∪ D) = P(B) + P(D) − P(B∩D)\n            = 0.5 + 0.4 − 0.3 = 0.6  ← Addition rule\n\n⚠ Always subtract the intersection to avoid double-counting!',
    cheatsheet:'§13 Probability Rules:\n• Complement: P(Aᶜ) = 1 − P(A)\n• Addition: P(A∪B) = P(A) + P(B) − P(A∩B)\n• Conditional: P(A|B) = P(A∩B) / P(B)\n• Multiplication: P(A∩B) = P(A|B) · P(B)'
  },
  {
    id:'p22', num:17, topic:'Probability',
    type:'Independence Test',
    text:'Given P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2.\n\na. P(A|B) = ?\nb. P(B|A) = ?\nc. Are A and B independent?',
    subQuestions:[
      {label:'a)', text:'P(A|B) = ?', answer:'0.4'},
      {label:'b)', text:'P(B|A) = ?', answer:'0.5'},
      {label:'c)', text:'Independent? (yes/no)', answer:'yes'}
    ],
    solution:'a. P(A|B) = P(A∩B) / P(B) = 0.2 / 0.5 = 0.4\nb. P(B|A) = P(A∩B) / P(A) = 0.2 / 0.4 = 0.5\nc. YES — P(A|B) = 0.4 = P(A) ✓\n\nAlternatively: P(A)·P(B) = 0.4 × 0.5 = 0.2 = P(A∩B) ✓\n\n⚠ Independent ≠ Mutually exclusive!\n   Independent: P(A|B) = P(A)\n   Mutually exclusive: P(A∩B) = 0  ← they CANNOT both be true',
    cheatsheet:'§13 Independence vs Mutual Exclusivity:\n⚠ These are DIFFERENT concepts!\n• Independent: P(A|B) = P(A), or P(A∩B) = P(A)·P(B)\n• Mutually exclusive: P(A∩B) = 0\n• If mutually exclusive + both P>0 → DEPENDENT (not independent!)'
  },
  {
    id:'p23', num:18, topic:'Probability',
    type:"Bayes' Rule",
    text:"Bayes's rule with genetic marker.\n\nP(D) = 1/84, P(N|D) = 1/2, P(N|Dᶜ) = 1.\n\nFind P(D|N).",
    subQuestions:[
      {label:'', text:'P(D|N) = ?', answer:'0.0060'}
    ],
    solution:"Step 1: P(D ∩ N) = P(N|D) · P(D) = (1/2)(1/84) = 1/168\nStep 2: P(N) = P(N|D)·P(D) + P(N|Dᶜ)·P(Dᶜ)\n       = 1/168 + (1)(83/84) = 1/168 + 166/168 = 167/168\nStep 3: P(D|N) = P(D∩N) / P(N) = (1/168) / (167/168) = 1/167 ≈ 0.0060\n\n⚠ Bayes' = flip the conditional. Key pattern:\nP(Cause|Evidence) = P(Evidence|Cause)·P(Cause) / P(Evidence)",
    cheatsheet:"§14 Bayes' Rule:\nP(D|+) = P(+|D)·P(D) / [P(+|D)·P(D) + P(+|Dᶜ)·P(Dᶜ)]\n\nSteps: ① List priors P(D), P(Dᶜ)\n       ② Compute each branch: P(E|D)·P(D)\n       ③ Sum = P(E)\n       ④ Divide: P(D|E) = branch / sum"
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 5: Discrete RV / Expected Value / Poisson ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p25', num:19, topic:'Discrete RV & Poisson',
    type:'Profit Distribution',
    text:"Fresh Oven Bakery: Makes 200 pies/day at $2.50 each. Sells at $5/pie.\nSales: 100 pies (p=0.50), 150 pies (p=0.25), 200 pies (p=0.25).\n\nWhich is the correct profit distribution?",
    options:[
      'A) Profit: −$500, −$250, $0',
      'B) Profit: $500, $750, $1000',
      'C) Profit: $0, $125, $250',
      'D) Profit: $0, $250, $500'
    ],
    answer:'D',
    solution:'Daily cost = 200 × $2.50 = $500\n\n• Sell 100: Revenue = 100×5 = $500, Profit = 500−500 = $0\n• Sell 150: Revenue = 150×5 = $750, Profit = 750−500 = $250\n• Sell 200: Revenue = 200×5 = $1000, Profit = 1000−500 = $500\n\nE(Profit) = 0(0.50) + 250(0.25) + 500(0.25) = $187.50/day',
    cheatsheet:'§15 Discrete Random Variables:\n• Profit = Revenue − Cost\n• E(X) = Σ x·P(x) = long-run average\n• Var(X) = Σ (x−μ)²·P(x)\n• SD(X) = √Var(X)'
  },
  {
    id:'p27', num:20, topic:'Discrete RV & Poisson',
    type:'Discrete Probability',
    text:'Discrete random variable from histogram:\np(22) = 0.10, p(23) = 0.15, p(24) = 0.25, p(25) = 0.25, p(26) = 0.25\n\na. P(25) = ?\nb. P(22 or 26) = ?\nc. P(x ≤ 23) = ?',
    subQuestions:[
      {label:'a)', text:'P(25) = ?', answer:'0.25'},
      {label:'b)', text:'P(22 or 26) = ?', answer:'0.35'},
      {label:'c)', text:'P(x ≤ 23) = ?', answer:'0.25'}
    ],
    solution:'a. P(25) = 0.25  (read directly from distribution)\n\nb. P(22 or 26) = P(22) + P(26) = 0.10 + 0.25 = 0.35\n   (mutually exclusive — add directly)\n\nc. P(x ≤ 23) = P(22) + P(23) = 0.10 + 0.15 = 0.25\n\n✓ Check: all probabilities sum to 1.00 ✓',
    cheatsheet:'§15 Discrete Distribution Rules:\n• All P(x) ≥ 0\n• Σ P(x) = 1\n• P(A or B) = P(A) + P(B) for mutually exclusive events\n• P(x ≤ k) = cumulative: sum all P(x) up to k'
  },
  {
    id:'p28', num:21, topic:'Discrete RV & Poisson',
    type:'Poisson Distribution',
    text:'Poisson with λ = 2.3.\n\na. P(X = 0) = ?\nb. P(X = 1) = ?\nc. E(X) and σ = ?',
    subQuestions:[
      {label:'a)', text:'P(X = 0) = ?', answer:'0.1003'},
      {label:'b)', text:'P(X = 1) = ?', answer:'0.2306'},
      {label:'c)', text:'σ = ?', answer:'1.517'}
    ],
    solution:'P(X = k) = e^(−λ) · λᵏ / k!\n\na. P(0) = e^(−2.3) · 2.3⁰ / 0! = e^(−2.3) ≈ 0.1003\nb. P(1) = e^(−2.3) · 2.3¹ / 1! = 0.1003 × 2.3 ≈ 0.2306\nc. E(X) = λ = 2.3\n   σ = √λ = √2.3 ≈ 1.517\n\n⚠ On calculator: e^(−2.3) → press (-) 2.3 → SHIFT → ln (=eˣ)',
    cheatsheet:'§17 Poisson Distribution:\nP(X=k) = e^(−λ) · λᵏ / k!\n• μ = λ, σ = √λ\n• Models: count of events in fixed interval\n• Assumptions: events independent, constant rate\n\nCalculator: input exponent → SHIFT → ln → gives e^x'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 6: Normal Distribution                    ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p30', num:22, topic:'Normal Distribution',
    type:'Normal Calculations',
    text:'Hours of sleep X ~ N(8.38, 2.05).\n\na. P(X > 12) = ?\nb. P(8 < X < 10) = ?\nc. Find a where P(X < a) = 0.30.',
    subQuestions:[
      {label:'a)', text:'P(X > 12) = ?', answer:'0.0387'},
      {label:'b)', text:'P(8 < X < 10) = ?', answer:'0.3588'},
      {label:'c)', text:'a = ?', answer:'7.30'}
    ],
    solution:'a. z = (12 − 8.38) / 2.05 = 1.766\n   P(Z > 1.766) ≈ 0.0387\n\nb. z₁ = (8 − 8.38) / 2.05 = −0.185\n   z₂ = (10 − 8.38) / 2.05 = 0.790\n   P(−0.185 < Z < 0.790) ≈ 0.3588\n\nc. P(X < a) = 0.30 → z = −0.5244\n   a = μ + z·σ = 8.38 + (−0.5244)(2.05) = 7.30\n\n⚠ For inverse: find z from table FIRST, then back-transform with x = μ + z·σ',
    cheatsheet:'§18 Normal Distribution:\nStandardise: z = (x − μ) / σ\nBack-transform: x = μ + z·σ\n\nCommon z-values:\nP(Z < −1.645) = 0.05    P(Z < 1.645) = 0.95\nP(Z < −1.96) = 0.025    P(Z < 1.96) = 0.975\nP(Z < −2.576) = 0.005   P(Z < 2.576) = 0.995'
  },
  {
    id:'p31', num:23, topic:'Normal Distribution',
    type:'Normality Assessment',
    text:'Which of the following suggests data are NOT approximately normal?',
    options:[
      'A) 95% of data falls within x̄ ± 2s',
      'B) Only 68% of data falls within x̄ ± 2s',
      'C) The histogram is bell-shaped',
      'D) IQR/s ≈ 1.3'
    ],
    answer:'B',
    solution:'For normal data:\n• ~68% within ±1σ  ← This is for ±1σ\n• ~95% within ±2σ  ← If only 68% falls within ±2σ, way too low!\n• ~99.7% within ±3σ\n\nAnswer B: 68% within ±2s is abnormally low → data is NOT normal.\n\nAll others (A, C, D) are consistent with normality.',
    cheatsheet:'§23 Normality Checks:\n68-95-99.7 Rule:\n→ 68% within ±1σ\n→ 95% within ±2σ\n→ 99.7% within ±3σ\n\nIQR/s ≈ 1.3 → normal\nHistogram: bell-shaped + symmetric → normal'
  },
  {
    id:'p34', num:24, topic:'Normal Distribution',
    type:'Binomial → Normal Approximation',
    text:'Binomial r.v. with n = 10, p = 0.4.\n\na. Normal approximation appropriate?\nb. μ and σ²?\nc. P(X ≥ 3) using normal approximation?',
    subQuestions:[
      {label:'a)', text:'Normal approx. appropriate? (yes/no)', answer:'no'},
      {label:'b)', text:'μ = ? , σ² = ?', answer:'μ=4, σ²=2.4'},
      {label:'c)', text:'P(X ≥ 3) ≈ ?', answer:'0.8335'}
    ],
    solution:'a. Check: np = 4, n(1−p) = 6. Need both ≥ 10 → FAILS.\n   Extra: μ ± 3σ = 4 ± 3(1.549) = [−0.65, 8.65] → extends below 0!\n   → Normal approximation NOT appropriate.\n\nb. μ = np = 10(0.4) = 4\n   σ² = np(1−p) = 10(0.4)(0.6) = 2.4\n\nc. With continuity correction:\n   P(X ≥ 3) → P(Y ≥ 2.5) where Y~N(4, 2.4)\n   z = (2.5 − 4) / √2.4 = −0.968\n   P(Z > −0.968) ≈ 0.8335',
    cheatsheet:'§16 Binomial:\nX ~ Bin(n, p): μ = np, σ² = np(1−p)\n\nNormal approx valid if:\n• np ≥ 10 AND n(1−p) ≥ 10\n• ⚠ Extra check: μ ± 3σ must stay in [0, n]\n\nContinuity correction:\nP(X ≥ k) → P(Y ≥ k − 0.5)\nP(X ≤ k) → P(Y ≤ k + 0.5)'
  },
  {
    id:'p33', num:25, topic:'Normal Distribution',
    type:'Histogram Normality Assessment',
    text:'Rock fracture: A histogram of JRC (Joint Roughness Coefficient) for 750 rock specimens shows:<br><br><table class="data-table"><tr><th>JRC range</th><th>Frequency</th></tr><tr><td>0–3</td><td>low (~2–5)</td></tr><tr><td>3–6</td><td>moderate (~15–35)</td></tr><tr><td>6–10</td><td>high (~45–68)</td></tr><tr><td>10–14</td><td>moderate (~22–48)</td></tr><tr><td>14–17</td><td>low (~5–22)</td></tr><tr><td>17–20</td><td>very low (~1–3)</td></tr></table><br>Peak frequency: ~68 at JRC ≈ 9–10<br>Distribution shape: roughly bell-shaped with a normal curve overlay<br>Slight asymmetry: left side rises more steeply, right tail extends slightly longer<br><br>Summary stats: x̄ = 9.17, s = 3.93, Q₁ = 6.2, Q₃ = 12.2<br><br>a. Does the histogram suggest approximate normality?<br>b. Check IQR/s ratio.<br>c. Check 68-95-99.7 rule with the given stats.',
    subQuestions:[
      {label:'a)', text:'Approximately normal from histogram? (yes/no)', answer:'yes, roughly'},
      {label:'b)', text:'IQR/s = ?', answer:'1.53'},
      {label:'c)', text:'Is IQR/s ≈ 1.3?', answer:'close but slightly high'}
    ],
    solution:'a. The histogram is roughly bell-shaped with a normal curve overlay that fits reasonably well. → Suggests approximately normal, with slight right skew.\n\nb. IQR = Q₃ − Q₁ = 12.2 − 6.2 = 6.0\n   IQR/s = 6.0 / 3.93 = 1.527\n   Expected for normal: ≈ 1.3\n   1.527 is somewhat larger → suggests slightly heavier tails or mild skew.\n\nc. 68-95-99.7 check:\n   x̄ ± 1s = [5.24, 13.10] — should contain ~68% of data\n   x̄ ± 2s = [1.31, 17.03] — should contain ~95% of data\n   x̄ ± 3s = [−2.62, 21.0] — should contain ~99.7% of data\n\n   The histogram shows most data falls within these ranges, consistent with normality.\n\n⚠ When IQR/s > 1.3: distribution may have heavier tails than normal.\n⚠ When IQR/s < 1.3: distribution may have lighter tails (more peaked).\n⚠ Always use MULTIPLE checks: histogram shape + IQR/s + 68-95-99.7 rule.',
    cheatsheet:'§23 Assessing Normality — Multiple Checks:\n\n1. Histogram: bell-shaped + symmetric?\n2. IQR/s ≈ 1.3?\n   • > 1.3 → heavier tails\n   • < 1.3 → lighter tails / more peaked\n3. 68-95-99.7 rule:\n   • ~68% within x̄ ± 1s\n   • ~95% within x̄ ± 2s\n   • ~99.7% within x̄ ± 3s\n\n⚠ No single check is definitive — use ALL three!'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 7: Sampling / CLT                        ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p35', num:26, topic:'Sampling & CLT',
    type:'Central Limit Theorem',
    text:'Will the sampling distribution of x̄ always be approximately normal?',
    options:[
      'A) No — it becomes approximately normal only when n is large enough.',
      'B) Yes, always.',
      'C) Only if the population is normal.',
      'D) Only if n > 100.'
    ],
    answer:'A',
    solution:'NO. The CLT says x̄ becomes approximately normal when n is sufficiently large, regardless of the population shape.\n\nSmall n from non-normal population → x̄ is NOT necessarily normal.\nLarge n → x̄ IS approximately normal (even if population is skewed).\n\n⚠ CLT changes the shape of x̄\'s distribution, NOT the population itself!',
    cheatsheet:'§19 Central Limit Theorem (CLT):\n• Large n → x̄ is approximately normal  EVEN IF population is NOT normal\n• μx̄ = μ (unbiased)\n• σx̄ = σ / √n  (standard error)\n• ⚠ CLT changes sampling distribution of x̄, NOT the population shape'
  },
  {
    id:'p38', num:27, topic:'Sampling & CLT',
    type:'Sampling Distribution of Mean',
    text:'Average salary: μ = $79,000, σ = $29,500, n = 80.\n\na. μx̄ = ?\nb. σx̄ = ?\nc. Shape of sampling distribution?\nd. z-score for x̄ = $70,000?\ne. P(x̄ > $70,000)?',
    subQuestions:[
      {label:'a)', text:'μx̄ = ?', answer:'79000'},
      {label:'b)', text:'σx̄ = ?', answer:'3298.20'},
      {label:'d)', text:'z = ?', answer:'-2.73'},
      {label:'e)', text:'P(x̄ > 70000) = ?', answer:'0.997'}
    ],
    solution:'a. μx̄ = μ = $79,000  (always equals population mean)\nb. σx̄ = σ/√n = 29,500/√80 ≈ $3,298.20\nc. Approximately normal — n = 80 is large (CLT applies)\nd. z = (70,000 − 79,000) / 3,298.20 = −2.73\ne. P(x̄ > 70,000) = P(Z > −2.73) = 1 − 0.0032 = 0.997\n\n⚠ Standard error σx̄ = σ/√n shrinks as n grows → more precise estimates.',
    cheatsheet:'§19 Sampling Distribution of x̄:\n• μx̄ = μ\n• σx̄ = σ / √n  ← "standard error"\n• Shape: normal if population normal, or approximately normal if n large (CLT)\n\nAs n ↑ → σx̄ ↓ → distribution gets NARROWER'
  },
  {
    id:'p39', num:28, topic:'Sampling & CLT',
    type:'Sampling Distribution of Proportion',
    text:'n = 87, p = 0.4.\n\na. Mean and SD of p̂?\nb. Shape of sampling distribution?\nc. z-score for p̂ = 0.41?\nd. P(p̂ > 0.41)?',
    subQuestions:[
      {label:'a)', text:'Mean = ?, SD = ?', answer:'0.4, 0.0525'},
      {label:'c)', text:'z for p̂ = 0.41?', answer:'0.19'},
      {label:'d)', text:'P(p̂ > 0.41) = ?', answer:'0.4245'}
    ],
    solution:'a. μp̂ = p = 0.4\n   σp̂ = √[p(1−p)/n] = √[0.4×0.6/87] ≈ 0.0525\n\nb. Approximately normal — np = 34.8 ≥ 15, n(1−p) = 52.2 ≥ 15 ✓\n\nc. z = (0.41 − 0.4) / 0.0525 = 0.19\n\nd. P(p̂ > 0.41) = P(Z > 0.19) ≈ 0.4245',
    cheatsheet:'§19 Sampling Distribution of p̂:\n• μp̂ = p\n• σp̂ = √[p(1−p)/n]\n• Normal approx valid if: np ≥ 15 AND n(1−p) ≥ 15\n\n⚠ Different threshold than Binomial approx (which uses 10)!'
  },

  {
    id:'p36', num:29, topic:'Sampling & CLT',
    type:'Sampling Distribution Shape vs n',
    text:'Relative frequency histograms of x̄ are shown for sample sizes n = 2, 5, 10, 30, 50 from a right-skewed population (μ = 40).\n\nObservations from the histograms:\n• n = 2:  Very spread out, flat, range ≈ 10–90\n• n = 5:  Still wide but slightly more concentrated around 40\n• n = 10: Bell-shape emerging, range ≈ 20–65\n• n = 30: Clearly bell-shaped, range ≈ 25–55\n• n = 50: Narrow bell shape, range ≈ 30–50\n\na. What happens to the shape of x̄ as n increases?\nb. What happens to the spread?\nc. Does the centre change?\nd. What theorem explains this?',
    subQuestions:[
      {label:'a)', text:'Shape as n increases?', answer:'becomes more normal/bell-shaped'},
      {label:'b)', text:'Spread as n increases?', answer:'decreases/narrower'},
      {label:'c)', text:'Centre changes?', answer:'no, stays at μ'},
      {label:'d)', text:'Which theorem?', answer:'CLT'}
    ],
    solution:'a. Shape: becomes more bell-shaped/normal as n increases.\n   Even though the population is skewed, the sampling distribution of x̄ approaches normal.\n\nb. Spread DECREASES: σx̄ = σ/√n → as n↑, σx̄↓\n   n=2: very wide, n=50: very narrow\n\nc. Centre does NOT change: μx̄ = μ = 40 for all n.\n   The histograms are all centred at ≈40.\n\nd. Central Limit Theorem (CLT):\n   Regardless of population shape, x̄ → Normal as n → ∞\n\n⚠ Key insight: CLT works even for SKEWED populations!\n⚠ n ≥ 30 is a common rule of thumb for "large enough"\n⚠ CLT changes the distribution of x̄, NOT the population.',
    cheatsheet:'§19 CLT Visual Summary:\n\nAs n increases:\n• Shape: → normal (bell-shaped)\n• Centre: stays at μ (no change)\n• Spread: → narrower (σ/√n)\n\nRule of thumb: n ≥ 30 usually sufficient\n\n⚠ Even from skewed/uniform populations!\n⚠ Larger n → better normal approximation\n⚠ σx̄ = σ/√n is called the STANDARD ERROR'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 8: Confidence Intervals                   ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p43', num:30, topic:'Confidence Intervals',
    type:'CI for μ',
    text:'x̄ = 75.3, s = 5.3, n = 100.\n\na. 95% CI?\nb. Meaning of confidence coefficient 0.95?\nc. 99% CI?\nd. Effect of increasing confidence level on width?\ne. Valid if population not normal?',
    subQuestions:[
      {label:'a)', text:'95% CI = ?', answer:'(74.26, 76.34)'},
      {label:'c)', text:'99% CI = ?', answer:'(73.93, 76.67)'},
      {label:'d)', text:'Width change when confidence increases?', answer:'increases'},
      {label:'e)', text:'Valid if not normal? (yes/no)', answer:'yes, n=100 is large'}
    ],
    solution:'a. 95% CI: 75.3 ± 1.96·(5.3/√100) = 75.3 ± 1.04 = (74.26, 76.34)\nc. 99% CI: 75.3 ± 2.576·(5.3/√100) = 75.3 ± 1.37 = (73.93, 76.67)\nd. Width INCREASES — higher confidence → bigger z* → wider interval.\ne. YES — n = 100 is large, CLT applies.\n\n⚠ Trade-off: More confidence → wider (less precise) interval.',
    cheatsheet:'§ CI for μ (large sample):\nCI: x̄ ± z* · (s/√n)\n\nCritical values z*:\n90%  → 1.645\n95%  → 1.960\n99%  → 2.576\n\nWidth ∝ z*/√n → more n = narrower, more confidence = wider'
  },
  {
    id:'p44', num:31, topic:'Confidence Intervals',
    type:'CI Width Effect',
    text:'If you quadruple the sample size, how does the CI width change?',
    options:[
      'A) Width doubles',
      'B) Width stays the same',
      'C) Width is halved',
      'D) Width is quartered'
    ],
    answer:'C',
    solution:'Width = 2 · z* · (s/√n)\n\nWidth ∝ 1/√n\n\nIf n → 4n:\n  1/√(4n) = 1/(2√n) = (1/2) · (1/√n)\n\n→ Width is HALVED (multiplied by 1/2).\n\n⚠ To halve the width, you must QUADRUPLE the sample size — not double it!',
    cheatsheet:'§ CI Width:\nWidth = 2 · z* · s/√n\nWidth ∝ 1/√n\n\n⚠ Key relationships:\n• Double n → width × 1/√2 ≈ 0.707\n• Quadruple n → width × 1/2 (halved)\n• To halve width → need 4× the sample size!'
  },
  {
    id:'p45', num:32, topic:'Confidence Intervals',
    type:'CI for Proportion',
    text:'Cell phone use: 20 out of 40 drivers used phones.\n\na. Point estimate p̂ = ?\nb. 95% CI = ?\nc. Interpretation?',
    subQuestions:[
      {label:'a)', text:'p̂ = ?', answer:'0.50'},
      {label:'b)', text:'95% CI = ?', answer:'(0.35, 0.65)'}
    ],
    solution:'a. p̂ = 20/40 = 0.50\n\nb. SE = √[0.50(0.50)/40] = √(0.00625) ≈ 0.0791\n   95% CI: 0.50 ± 1.96(0.0791) = 0.50 ± 0.155 ≈ (0.35, 0.65)\n\nc. We are 95% confident the TRUE proportion of all drivers using phones lies between 0.35 and 0.65.\n\n⚠ "95% confident" means: 95% of such intervals from repeated samples would contain the true p.',
    cheatsheet:'§ CI for p:\np̂ ± z* · √[p̂(1−p̂)/n]\n\n"95% confident" means:\n→ In repeated sampling, 95% of intervals would contain true p\n→ NOT: "95% probability p is in this interval"'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 9: Hypothesis Testing                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p47', num:33, topic:'Hypothesis Testing',
    type:'t-test for Mean',
    text:'Test H₀: μ = 10 vs Hₐ: μ ≠ 10.\nn = 50, x̄ = 10.6, s = 2.8.\n\nFind t-statistic, p-value, and interpret.',
    subQuestions:[
      {label:'', text:'t = ?', answer:'1.515'},
      {label:'', text:'p-value ≈ ?', answer:'0.136'},
      {label:'', text:'Reject at α = 0.05?', answer:'no'}
    ],
    solution:'t = (x̄ − μ₀) / (s/√n) = (10.6 − 10) / (2.8/√50)\n  = 0.6 / 0.396 ≈ 1.515\n\np-value ≈ 0.136 (two-tailed)\n\nSince p = 0.136 > α = 0.05 → Do NOT reject H₀.\nThere is insufficient evidence that μ ≠ 10.\n\n⚠ Reject H₀ only when α > 0.136 (i.e., only at very loose significance levels).',
    cheatsheet:'§ Hypothesis Testing Framework:\n1. State H₀ and Hₐ\n2. Choose α (usually 0.05)\n3. Compute test statistic\n4. Find p-value\n5. Decision: p < α → Reject H₀\n\nt = (x̄ − μ₀) / (s/√n), df = n−1'
  },
  {
    id:'p49', num:34, topic:'Hypothesis Testing',
    type:'One-tail vs Two-tail',
    text:'One-sample t-test: t = 1.91, one-tailed p-value = 0.036.\n\na. Required assumptions?\nb. Interpret at α = 0.05 for Hₐ: μ > 2000.\nc. If Hₐ were μ ≠ 2000 instead, what changes?',
    subQuestions:[
      {label:'a)', text:'Assumptions?', answer:'random sample, approx. normal'},
      {label:'b)', text:'Reject at α = 0.05? (Hₐ: μ > 2000)', answer:'yes'},
      {label:'c)', text:'Two-tailed p-value? Reject?', answer:'p = 0.072, do not reject'}
    ],
    solution:'a. Assumptions: random sample + approximately normal population\n\nb. One-tailed: p = 0.036 < 0.05 → REJECT H₀.\n   Sufficient evidence μ > 2000.\n\nc. Two-tailed: p = 2 × 0.036 = 0.072\n   0.072 > 0.05 → Do NOT reject H₀.\n   Insufficient evidence μ ≠ 2000.\n\n⚠ Same data, different conclusion! One-tail and two-tail tests can give opposite decisions.',
    cheatsheet:'§ One-tail vs Two-tail:\nTwo-tailed p = 2 × one-tailed p\n\n⚠ Same data can reject with one-tail but NOT with two-tail!\n\nt-test assumptions:\n1. Random sample\n2. Population approximately normal (or n large → CLT)'
  },
  {
    id:'p50', num:35, topic:'Hypothesis Testing',
    type:'One-proportion z-test',
    text:'658 internet users, 433 paid to download music. p̂ ≈ 0.658.\nH₀: p = 0.7, Hₐ: p > 0.7, α = 0.01.\n\na. Point estimate?\nc. Test statistic z?\nd. Rejection region?\ne. p-value?\nf. Conclusion?',
    subQuestions:[
      {label:'a)', text:'p̂ = ?', answer:'0.66'},
      {label:'c)', text:'z = ?', answer:'-2.35'},
      {label:'d)', text:'Rejection region?', answer:'z > 2.326'},
      {label:'e)', text:'p-value = ?', answer:'0.991'},
      {label:'f)', text:'Reject H₀?', answer:'no'}
    ],
    solution:'a. p̂ = 433/658 ≈ 0.658\n\nc. z = (p̂ − p₀) / √[p₀(1−p₀)/n]\n   = (0.658 − 0.7) / √[0.7(0.3)/658]\n   = −0.042 / 0.01786 ≈ −2.35\n\nd. Right-tail test at α = 0.01: reject if z > 2.326\n\ne. p-value = P(Z > −2.35) ≈ 0.991\n\nf. Do NOT reject H₀.\n\n⚠ TRAP: z = −2.35 is in the WRONG direction! Hₐ says p > 0.7, but we observed p̂ < 0.7. The test statistic goes AGAINST the alternative hypothesis.',
    cheatsheet:'§ z-test for proportion:\nz = (p̂ − p₀) / √[p₀(1−p₀)/n]\n\n⚠ Use p₀ (null value) in SE formula, NOT p̂!\n⚠ If test stat is in wrong direction (opposite of Hₐ) → automatic fail to reject\n\nRejection regions (α = 0.01):\nRight-tail: z > 2.326\nLeft-tail: z < −2.326\nTwo-tail: |z| > 2.576'
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  TOPIC 10: Two-sample / Two-proportion           ║
  // ╚══════════════════════════════════════════════════╝
  {
    id:'p52', num:36, topic:'Two-sample Tests',
    type:'Pooled t-test & CI',
    text:'Sample 1: n₁ = 18, x̄₁ = 5.5, s₁ = 3.6\nSample 2: n₂ = 12, x̄₂ = 7.1, s₂ = 4.6\n\na. Test H₀: μ₁ − μ₂ = 0 vs Hₐ: μ₁ − μ₂ ≠ 0.\nb. 90% CI for μ₁ − μ₂?',
    subQuestions:[
      {label:'a)', text:'t = ?, p = ?', answer:'t = -1.07, p = 0.295'},
      {label:'', text:'Conclusion?', answer:'do not reject H₀'},
      {label:'b)', text:'90% CI = ?', answer:'(-4.15, 0.95)'}
    ],
    solution:'a. t = −1.07, p-value = 0.295\n   p > 0.05 → Do NOT reject H₀.\n   Insufficient evidence that means differ.\n\nb. 90% CI for μ₁ − μ₂: (−4.15, 0.95)\n   The interval CONTAINS 0 → consistent with no difference.\n\n⚠ CI containing 0 ↔ fail to reject H₀.\n   CI NOT containing 0 ↔ reject H₀.',
    cheatsheet:'§ Two-sample pooled t-test:\nAssumptions:\n1. Independent samples\n2. Approximately normal populations\n3. Equal variances (σ₁² = σ₂²)\n\nCI interpretation: if contains 0 → no significant difference\n⚠ CI and test must give same conclusion!'
  },
  {
    id:'p54', num:37, topic:'Two-sample Tests',
    type:'Two-proportion CI',
    text:'Milkshake store: 81/2445, Donut store: 71/6604.\n\na–c. p̂₁, p̂₂, difference?\nd. 90% CI for p₁ − p₂?\nf. Statistically significant?\ng. Practically significant (threshold 0.01)?',
    subQuestions:[
      {label:'a)', text:'p̂₁ = ?', answer:'0.033'},
      {label:'b)', text:'p̂₂ = ?', answer:'0.011'},
      {label:'c)', text:'Difference = ?', answer:'0.022'},
      {label:'d)', text:'90% CI = ?', answer:'(0.016, 0.029)'},
      {label:'f)', text:'Statistically significant?', answer:'yes'},
      {label:'g)', text:'Practically significant?', answer:'yes'}
    ],
    solution:'a. p̂₁ = 81/2445 ≈ 0.033\nb. p̂₂ = 71/6604 ≈ 0.011\nc. Difference = 0.033 − 0.011 = 0.022\nd. 90% CI: (0.016, 0.029)\n\nf. Statistically significant? YES — 0 is NOT in the interval.\ng. Practically significant? YES — entire interval is ABOVE 0.01.\n\n⚠ Statistical significance ≠ practical significance!\n   Always check if the effect size matters in the real world.',
    cheatsheet:'§ Two-proportion CI:\n(p̂₁ − p̂₂) ± z* · √[p̂₁(1−p̂₁)/n₁ + p̂₂(1−p̂₂)/n₂]\n\nStatistically significant: CI excludes 0\nPractically significant: entire CI above practical threshold\n\n⚠ Large n can make tiny differences "statistically significant"'
  },
  {
    id:'p55', num:38, topic:'Two-sample Tests',
    type:'Two-proportion z-test',
    text:'MBA groups. A: 210/1312, B: 363/7107. α = 0.10.\nIs Group A more likely to be entrepreneurs?\n\na. Hypotheses?\nb. z = ?\nc. p-value = ?\nd. Conclusion?',
    subQuestions:[
      {label:'a)', text:'H₀ and Hₐ?', answer:'H₀: p₁−p₂=0, Hₐ: p₁−p₂>0'},
      {label:'b)', text:'z = ?', answer:'14.40'},
      {label:'c)', text:'p-value = ?', answer:'0.000'},
      {label:'d)', text:'Conclusion?', answer:'reject H₀'}
    ],
    solution:'a. H₀: p₁ − p₂ = 0, Hₐ: p₁ − p₂ > 0 (one-tailed, Group A > Group B)\n\nb. z = 14.40 (extremely large)\n\nc. p-value ≈ 0.000\n\nd. Reject H₀. Strong evidence that Group A proportion is greater.\n\n⚠ For two-proportion z-test: use POOLED p̂ in the standard error!\n   p̂_pooled = (x₁ + x₂) / (n₁ + n₂)\n   This is different from the CI formula (which uses individual p̂s).',
    cheatsheet:'§ Two-proportion z-test:\nH₀: p₁ − p₂ = 0\n⚠ Use POOLED p̂:\np̂ = (x₁ + x₂) / (n₁ + n₂)\nSE = √[p̂(1−p̂)(1/n₁ + 1/n₂)]\n\n⚠ CI formula uses individual p̂s, NOT pooled!\n⚠ Forgetting pooled p̂ in test = common exam mistake!'
  }
];
