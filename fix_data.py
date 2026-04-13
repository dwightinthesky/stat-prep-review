import codecs

with codecs.open('questions-pearson.js', 'r', 'utf-8') as f:
    text = f.read()

reps = [
    (
        "  Category                        Code    Count\n  Anchor (>30,000 sq ft)           A       750\n  Major space (10,000–30,000)      MS       72\n  Large standard (4,000–10,000)    LS      244\n  Small standard (1,500–4,000)     SS      827\n  Small (<1,500 sq ft)             S        29",
        "```\n  Category                        Code    Count\n  Anchor (>30,000 sq ft)           A       750\n  Major space (10,000–30,000)      MS       72\n  Large standard (4,000–10,000)    LS      244\n  Small standard (1,500–4,000)     SS      827\n  Small (<1,500 sq ft)             S        29\n```"
    ),
    (
        "  Variable   N    StDev   Variance   Min     Max     Range\n  PermA     100   14.87   221.19    54.40   120.70   66.30\n  PermB     100   22.22   493.56    50.80   150.40   99.60\n  PermC     100   20.49   419.74    53.20   129.40   76.20",
        "```\n  Variable   N    StDev   Variance   Min     Max     Range\n  PermA     100   14.87   221.19    54.40   120.70   66.30\n  PermB     100   22.22   493.56    50.80   150.40   99.60\n  PermC     100   20.49   419.74    53.20   129.40   76.20\n```"
    ),
    (
        "                  Males    Females\n  Salary too low    30        99\n  Equitable/fair    56        66\n  Paid well         10        23\n  TOTALS            96       188",
        "```\n                  Males    Females\n  Salary too low    30        99\n  Equitable/fair    56        66\n  Paid well         10        23\n  TOTALS            96       188\n```"
    ),
    (
        "          Col 1   Col 2   Col 3\n  Row 1     8      32      55\n  Row 2    19      26      25",
        "```\n          Col 1   Col 2   Col 3\n  Row 1     8      32      55\n  Row 2    19      26      25\n```"
    ),
    (
        "  x:  5   4  −2   2   8   5   4\n  y:  3   5   0   1   9   4   3",
        "```\n  x:  5   4  −2   2   8   5   4\n  y:  3   5   0   1   9   4   3\n```"
    ),
    (
        "1.23  2.86  1.66  1.99  1.31  1.41  1.77  2.91  2.56  1.41\n3.43  2.34  3.29  1.41  2.01  1.23  2.47  2.14  2.18  1.39",
        "```\n1.23  2.86  1.66  1.99  1.31  1.41  1.77  2.91  2.56  1.41\n3.43  2.34  3.29  1.41  2.01  1.23  2.47  2.14  2.18  1.39\n```"
    ),
    (
        "  JRC range: 0 to 20\n  Peak frequency: ~68 at JRC ≈ 9–10\n  Distribution shape: roughly bell-shaped with a normal curve overlay\n  Slight asymmetry: left side rises more steeply, right tail extends slightly longer\n  Frequencies: 0–3 (low, ~2–5), 3–6 (moderate, ~15–35), 6–10 (high, ~45–68),\n               10–14 (moderate, ~22–48), 14–17 (low, ~5–22), 17–20 (very low, ~1–3)\n\n  Summary stats: x̄ = 9.17, s = 3.93, Q₁ = 6.2, Q₃ = 12.2",
        "```\n  JRC range: 0 to 20\n  Peak frequency: ~68 at JRC ≈ 9–10\n  Distribution shape: roughly bell-shaped with a normal curve overlay\n  Slight asymmetry: left side rises more steeply, right tail extends slightly longer\n  Frequencies: 0–3 (low, ~2–5), 3–6 (moderate, ~15–35), 6–10 (high, ~45–68),\n               10–14 (moderate, ~22–48), 14–17 (low, ~5–22), 17–20 (very low, ~1–3)\n\n  Summary stats: x̄ = 9.17, s = 3.93, Q₁ = 6.2, Q₃ = 12.2\n```"
    )
]

for o, n in reps:
    text = text.replace(o, n)

with codecs.open('questions-pearson.js', 'w', 'utf-8') as f:
    f.write(text)
print("Done")
