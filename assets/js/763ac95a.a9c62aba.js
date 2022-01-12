"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4849],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7297:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],s={title:"Data Balance Analysis on Spark",hide_title:!0,sidebar_label:"Data Balance Analysis",description:"Learn how to do Data Balance Analysis on Spark to determine how well features and feature values are represented in your dataset.",name:"Data Balance Analysis"},o="Data Balance Analysis on Spark",p={unversionedId:"features/responsible_ai/Data Balance Analysis",id:"version-0.9.5/features/responsible_ai/Data Balance Analysis",title:"Data Balance Analysis on Spark",description:"Learn how to do Data Balance Analysis on Spark to determine how well features and feature values are represented in your dataset.",source:"@site/versioned_docs/version-0.9.5/features/responsible_ai/Data Balance Analysis.md",sourceDirName:"features/responsible_ai",slug:"/features/responsible_ai/Data Balance Analysis",permalink:"/SynapseML/docs/features/responsible_ai/Data Balance Analysis",tags:[],version:"0.9.5",frontMatter:{title:"Data Balance Analysis on Spark",hide_title:!0,sidebar_label:"Data Balance Analysis",description:"Learn how to do Data Balance Analysis on Spark to determine how well features and feature values are represented in your dataset."},sidebar:"docs",previous:{title:"GeospatialServices - Overview",permalink:"/SynapseML/docs/features/cognitive_services/GeospatialServices - Overview"},next:{title:"DataBalanceAnalysis - Adult Census Income",permalink:"/SynapseML/docs/features/responsible_ai/DataBalanceAnalysis - Adult Census Income"}},u=[{value:"Context",id:"context",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Measure Explanations",id:"measure-explanations",children:[{value:"Feature Balance Measures",id:"feature-balance-measures",children:[],level:3},{value:"Distribution Balance Measures",id:"distribution-balance-measures",children:[],level:3},{value:"Aggregate Balance Measures",id:"aggregate-balance-measures",children:[],level:3}],level:2},{value:"Mitigation",id:"mitigation",children:[{value:"Resampling",id:"resampling",children:[],level:3},{value:"Reweighting",id:"reweighting",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-balance-analysis-on-spark"},"Data Balance Analysis on Spark"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Data Balance Analysis is relevant for overall understanding of datasets, but it becomes essential when thinking about building Machine Learning services out of such datasets. Having a well balanced data representation is critical when developing models in a responsible way, specially in terms of fairness.\nIt is unfortunately all too easy to build an ML model that produces biased results for subsets of an overall population, by training or testing the model on biased ground truth data. There are multiple case studies of biased models assisting in granting loans, healthcare, recruitment opportunities and many other decision making tasks. In most of these examples, the data from which these models are trained was the common issue. These findings emphasize how important it is for model creators and auditors to analyze data balance: to measure training data across sub-populations and ensure the data has good coverage and a balanced representation of labels across sensitive categories and category combinations, and to check that test data is representative of the target population."),(0,i.kt)("p",null,"In summary, Data Balance Analysis, used as a step for building ML models has the following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reduces risks for unbalanced models (facilitate service fairness) and reduces costs of ML building")," by identifying early on data representation gaps that prompt data scientists to seek mitigation steps (collect more data, follow a specific sampling mechanism, create synthetic data, etc.) before proceeding to train their models."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enables easy e2e debugging of ML systems")," in combination with ",(0,i.kt)("a",{parentName:"li",href:"https://fairlearn.org/"},"Fairlearn")," by providing a clear view if for an unbalanced model the issue is tied to the data or the model.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../../features/responsible_ai/DataBalanceAnalysis%20-%20Adult%20Census%20Income"},"Data Balance Analysis - Adult Census Income"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Data Balance Analysis currently supports three transformers in the ",(0,i.kt)("inlineCode",{parentName:"p"},"synapse.ml.exploratory")," namespace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FeatureBalanceMeasure - supervised (requires label column)"),(0,i.kt)("li",{parentName:"ul"},"DistributionBalanceMeasure - unsupervised (doesn't require label column)"),(0,i.kt)("li",{parentName:"ul"},"AggregateBalanceMeasure - unsupervised (doesn't require label column)")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Import all three transformers."),(0,i.kt)("p",{parentName:"li"},"For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.exploratory import AggregateBalanceMeasure, DistributionBalanceMeasure, FeatureBalanceMeasure\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Load your dataset, define features of interest, and ensure that the label column is binary. The ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureBalanceMeasure")," transformer currently only supports binary labels, but support for numerical labels will be added soon."),(0,i.kt)("p",{parentName:"li"},"For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pyspark.sql.functions as F\n\nfeatures = ["race", "sex"]\nlabel = "income"\n\ndf = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet")\n\n# Convert the "income" column from {<=50K, >50K} to {0, 1} to represent our binary classification label column\ndf = df.withColumn(label, F.when(F.col(label).contains("<=50K"), F.lit(0)).otherwise(F.lit(1)))\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureBalanceMeasure")," transformer and call ",(0,i.kt)("inlineCode",{parentName:"p"},"setSensitiveCols")," to set the list of sensitive features and call ",(0,i.kt)("inlineCode",{parentName:"p"},"setLabelCol")," to set the binary label column. Then, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," method with your dataset and visualize the resulting dataframe."),(0,i.kt)("p",{parentName:"li"},"For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"feature_balance_measures = (\n    FeatureBalanceMeasure()\n    .setSensitiveCols(features)\n    .setLabelCol(label)\n    .transform(df)\n)\nfeature_balance_measures.show(truncate=False)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"DistributionBalanceMeasure")," transformer and and call ",(0,i.kt)("inlineCode",{parentName:"p"},"setSensitiveCols")," to set the list of sensitive features. Then, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," method with your dataset and visualize the resulting dataframe."),(0,i.kt)("p",{parentName:"li"},"For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"distribution_balance_measures = (\n    DistributionBalanceMeasure()\n    .setSensitiveCols(features)\n    .transform(df)\n)\ndistribution_balance_measures.show(truncate=False)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateBalanceMeasure")," transformer and and call ",(0,i.kt)("inlineCode",{parentName:"p"},"setSensitiveCols")," to set the list of sensitive features. Then, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," method with your dataset and visualize the resulting dataframe."),(0,i.kt)("p",{parentName:"li"},"For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"aggregate_balance_measures = (\n    AggregateBalanceMeasure()\n    .setSensitiveCols(features)\n    .transform(df)\n)\naggregate_balance_measures.show(truncate=False)\n")))),(0,i.kt)("p",null,"Note: If you are running this notebook in a Spark environment such as Azure Synapse or Databricks, then you can easily visualize the imbalance measures by calling the built-in plotting features ",(0,i.kt)("inlineCode",{parentName:"p"},"display()"),"."),(0,i.kt)("h2",{id:"measure-explanations"},"Measure Explanations"),(0,i.kt)("h3",{id:"feature-balance-measures"},"Feature Balance Measures"),(0,i.kt)("p",null,"Feature Balance Measures allow us to see whether each combination of sensitive feature is receiving the positive outcome (true prediction) at balanced probability."),(0,i.kt)("p",null,"In this context, we define a feature balance measure, also referred to as the parity, for label y as the difference between the association metrics of two different sensitive classes $","[x_A, x_B]","$, with respect to the association metric $A(x_i, y)$. That is:"),(0,i.kt)("p",null,"$parity(y \\vert x_A, x_B, A(\\cdot)) \\coloneqq A(x_A, y) - A(x_B, y)$"),(0,i.kt)("p",null,"Using the dataset, we can see if the various sexes and races are receiving >50k income at equal or unequal rates."),(0,i.kt)("p",null,"Note: Many of these metrics were influenced by this paper ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2103.03417"},"Measuring Model Biases in the Absence of Ground Truth"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Association Metric"),(0,i.kt)("th",{parentName:"tr",align:null},"Family"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Interpretation/Formula"),(0,i.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Demographic Parity"),(0,i.kt)("td",{parentName:"tr",align:null},"Fairness"),(0,i.kt)("td",{parentName:"tr",align:null},"Proportion of each segment of a protected class (e.g. gender) should receive the positive outcome at equal rates."),(0,i.kt)("td",{parentName:"tr",align:null},'As close to 0 means better parity. $DP = P(Y \\vert A = "Male") - P(Y \\vert A = "Female")$.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Fairness_%28machine_learning%29"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pointwise Mutual Information (PMI), normalized PMI"),(0,i.kt)("td",{parentName:"tr",align:null},"Entropy"),(0,i.kt)("td",{parentName:"tr",align:null},"The PMI of a pair of feature values (ex: Gender=Male and Gender=Female) quantifies the discrepancy between the probability of their coincidence given their joint distribution and their individual distributions (assuming independence)."),(0,i.kt)("td",{parentName:"tr",align:null},"Range (normalized) $","[-1, 1]","$. -1 for no co-occurences. 0 for co-occurences at random. 1 for complete co-occurences."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Pointwise_mutual_information"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sorensen-Dice Coefficient (SDC)"),(0,i.kt)("td",{parentName:"tr",align:null},"Intersection-over-Union"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to gauge the similarity of two samples. Related to F1 score."),(0,i.kt)("td",{parentName:"tr",align:null},"Equals twice the number of elements common to both sets divided by the sum of the number of elements in each set."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Jaccard Index"),(0,i.kt)("td",{parentName:"tr",align:null},"Intersection-over-Union"),(0,i.kt)("td",{parentName:"tr",align:null},"Similar to SDC, guages the similarity and diversity of sample sets."),(0,i.kt)("td",{parentName:"tr",align:null},"Equals the size of the intersection divided by the size of the union of the sample sets."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Jaccard_index"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kendall Rank Correlation"),(0,i.kt)("td",{parentName:"tr",align:null},"Correlation and Statistical Tests"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to measure the ordinal association between two measured quantities."),(0,i.kt)("td",{parentName:"tr",align:null},"High when observations have a similar rank and low when observations have a dissimilar rank between the two variables."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Kendall_rank_correlation_coefficient"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Log-Likelihood Ratio"),(0,i.kt)("td",{parentName:"tr",align:null},"Correlation and Statistical Tests"),(0,i.kt)("td",{parentName:"tr",align:null},"Calculates the degree to which data supports one variable versus another. Log of the likelihood ratio, which gives the probability of correctly predicting the label in ratio to probability of incorrectly predicting label."),(0,i.kt)("td",{parentName:"tr",align:null},"If likelihoods are similar, it should be close to 0."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Likelihood_function#Likelihood_ratio"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t-test"),(0,i.kt)("td",{parentName:"tr",align:null},"Correlation and Statistical Tests"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to compare the means of two groups (pairwise)."),(0,i.kt)("td",{parentName:"tr",align:null},"Value looked up in t-Distribution tell if statistically significant or not."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Student's_t-test"},"Link"))))),(0,i.kt)("h3",{id:"distribution-balance-measures"},"Distribution Balance Measures"),(0,i.kt)("p",null,"Distribution Balance Measures allow us to compare our data with a reference distribution (currently only uniform distribution is supported as a reference distribution). They are calculated per sensitive column and do not depend on the label column."),(0,i.kt)("p",null,"For example, let's assume we have a dataset with 9 rows and a Gender column, and we observe that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Male" appears 4 times'),(0,i.kt)("li",{parentName:"ul"},'"Female" appears 3 times'),(0,i.kt)("li",{parentName:"ul"},'"Other" appears 2 times')),(0,i.kt)("p",null,"Assuming the uniform distribution:\n$$\nReferenceCount \\coloneqq  \\frac{numRows}{numFeatureValues}\n$$\n$$\nReferenceProbability \\coloneqq  \\frac{1}{numFeatureValues}\n$$"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Observed Count"),(0,i.kt)("th",{parentName:"tr",align:null},"Reference Count"),(0,i.kt)("th",{parentName:"tr",align:null},"Observed Probability"),(0,i.kt)("th",{parentName:"tr",align:null},"Reference Probabiliy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Male"),(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"9/3 = 3"),(0,i.kt)("td",{parentName:"tr",align:null},"4/9 = 0.44"),(0,i.kt)("td",{parentName:"tr",align:null},"3/9 = 0.33")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Female"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"9/3 = 3"),(0,i.kt)("td",{parentName:"tr",align:null},"3/9 = 0.33"),(0,i.kt)("td",{parentName:"tr",align:null},"3/9 = 0.33")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"9/3 = 3"),(0,i.kt)("td",{parentName:"tr",align:null},"2/9 = 0.22"),(0,i.kt)("td",{parentName:"tr",align:null},"3/9 = 0.33")))),(0,i.kt)("p",null,"We can use distance measures to find out how far our observed and reference distributions of these feature values are. Some of these distance measures include:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Measure"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Interpretation"),(0,i.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"KL Divergence"),(0,i.kt)("td",{parentName:"tr",align:null},"Measure of how one probability distribution is different from a second, reference probability distribution. Measure of the information gained when one revises one's beliefs from the prior probability distribution Q to the posterior probability distribution P. In other words, it is the amount of information lost when Q is used to approximate P."),(0,i.kt)("td",{parentName:"tr",align:null},"Non-negative. 0 means P = Q."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JS Distance"),(0,i.kt)("td",{parentName:"tr",align:null},"Measuring the similarity between two probability distributions. Symmetrized and smoothed version of the Kullback\u2013Leibler (KL) divergence. Square root of JS Divergence."),(0,i.kt)("td",{parentName:"tr",align:null},"Range ","[0, 1]",". 0 means perfectly same to balanced distribution."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wasserstein Distance"),(0,i.kt)("td",{parentName:"tr",align:null},"This distance is also known as the earth mover\u2019s distance, since it can be seen as the minimum amount of \u201cwork\u201d required to transform u into v, where \u201cwork\u201d is measured as the amount of distribution weight that must be moved, multiplied by the distance it has to be moved."),(0,i.kt)("td",{parentName:"tr",align:null},"Non-negative. 0 means P = Q."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Wasserstein_metric"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Infinity Norm Distance"),(0,i.kt)("td",{parentName:"tr",align:null},"Distance between two vectors is the greatest of their differences along any coordinate dimension. Also called Chebyshev distance or chessboard distance."),(0,i.kt)("td",{parentName:"tr",align:null},"Non-negative. 0 means same distribution."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Chebyshev_distance"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Total Variation Distance"),(0,i.kt)("td",{parentName:"tr",align:null},"It is equal to half the L1 (Manhattan) distance between the two distributions. Take the difference between the two proportions in each category, add up the absolute values of all the differences, and then divide the sum by 2."),(0,i.kt)("td",{parentName:"tr",align:null},"Non-negative. 0 means same distribution."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Total_variation_distance_of_probability_measures"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chi-Squared Test"),(0,i.kt)("td",{parentName:"tr",align:null},"The chi-square test tests the null hypothesis that the categorical data has the given frequencies given expected frequencies in each category."),(0,i.kt)("td",{parentName:"tr",align:null},"p-value gives evidence against null-hypothesis that difference in observed and expected frequencies is by random chance."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Chi-squared_test"},"Link"))))),(0,i.kt)("h3",{id:"aggregate-balance-measures"},"Aggregate Balance Measures"),(0,i.kt)("p",null,"Aggregate Balance Measures allow us to obtain a higher notion of inequality. They are calculated on the set of all sensitive columns and do not depend on the label column."),(0,i.kt)("p",null,"These measures look at distribution of records across all combinations of sensitive columns. For example, if Sex and Race are specified as sensitive features, it then tries to quantify imbalance across all combinations of the two specified features - (Male, Black), (Female, White), (Male, Asian-Pac-Islander), etc."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Measure"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Interpretation"),(0,i.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Atkinson Index"),(0,i.kt)("td",{parentName:"tr",align:null},"It presents the percentage of total income that a given society would have to forego in order to have more equal shares of income between its citizens. This measure depends on the degree of society aversion to inequality (a theoretical parameter decided by the researcher), where a higher value entails greater social utility or willingness by individuals to accept smaller incomes in exchange for a more equal distribution. An important feature of the Atkinson index is that it can be decomposed into within-group and between-group inequality."),(0,i.kt)("td",{parentName:"tr",align:null},"Range $","[0, 1]","$. 0 if perfect equality. 1 means maximum inequality. In our case, it is the proportion of records for a sensitive columns\u2019 combination."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Atkinson_index"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Theil T Index"),(0,i.kt)("td",{parentName:"tr",align:null},'GE(1) = Theil\'s T and is more sensitive to differences at the top of the distribution. The Theil index is a statistic used to measure economic inequality. The Theil index measures an entropic "distance" the population is away from the "ideal" egalitarian state of everyone having the same income.'),(0,i.kt)("td",{parentName:"tr",align:null},"If everyone has the same income, then\xa0T_T\xa0equals\xa00. If one person has all the income, then\xa0T_T\xa0gives the result\xa0$ln(N)$.\xa00 means equal income and larger values mean higher level of disproportion."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Theil_index"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Theil L Index"),(0,i.kt)("td",{parentName:"tr",align:null},"GE(0) = Theil's L and is more sensitive to differences at the lower end of the distribution. Logarithm of (mean income)/(income i), over all the incomes included in the summation. It is also referred to as the mean log deviation measure. Because a transfer from a larger income to a smaller one will change the smaller income's ratio more than it changes the larger income's ratio, the transfer-principle is satisfied by this index."),(0,i.kt)("td",{parentName:"tr",align:null},"Same interpretation as Theil T Index."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Theil_index"},"Link"))))),(0,i.kt)("h2",{id:"mitigation"},"Mitigation"),(0,i.kt)("p",null,"It will not be a stretch to say that every real-world dataset has caveats, biases, and imbalances. Data collection is costly. Data Imbalance mitigation or de-biasing data is an area of research. There are many techniques available at various stages of ML lifecycle i.e., during pre-processing, in-processing, and post processing. Here we outline a couple of pre-processing techniques -  "),(0,i.kt)("h3",{id:"resampling"},"Resampling"),(0,i.kt)("p",null,"This involves under-sampling from majority class and over-sampling from minority class. Most na\xefve way to over-sample would be duplicate records and under-sample would be to remove records at random.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Caveats:  "),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Under-sampling may remove valuable information.  "),(0,i.kt)("li",{parentName:"ol"},"Over-sampling may cause overfitting and poor generalization on test set.")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/responsible_ai/DataBalanceAnalysis_SamplingBar.png",alt:"Bar chart undersampling and oversampling"})),(0,i.kt)("p",null,"There are smarter techniques to under-sample and over-sample in literature and implemented in Python\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://imbalanced-learn.org/stable/"},"imbalanced-learn")," package.  "),(0,i.kt)("p",null,"For example, we can cluster the records of the majority class, and do the under-sampling by removing records from each cluster, thus seeking to preserve information.  "),(0,i.kt)("p",null,"One technique of under-sampling is use of Tomek Links. Tomek links are pairs of very close instances but of opposite classes. Removing the instances of the majority class of each pair increases the space between the two classes, facilitating the classification process. A similar way to under-sample majority class is using Near-Miss. It first calculates the distance between all the points in the larger class with the points in the smaller class. When two points belonging to different classes are very close to each other in the distribution, this algorithm eliminates the datapoint of the larger class thereby trying to balance the distribution."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/responsible_ai/DataBalanceAnalysis_TomekLinks.png",alt:"Tomek Links"})),(0,i.kt)("p",null,"In over-sampling, instead of creating exact copies of the minority class records, we can introduce small variations into those copies, creating more diverse synthetic samples. This technique is called SMOTE (Synthetic Minority Oversampling Technique). It randomly picks a point from the minority class and computes the k-nearest neighbors for this point. The synthetic points are added between the chosen point and its neighbors."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/responsible_ai/DataBalanceAnalysis_SyntheticSamples.png",alt:"Synthetic Samples"})),(0,i.kt)("h3",{id:"reweighting"},"Reweighting"),(0,i.kt)("p",null,"There is an expected and observed value in each table cell. The weight is essentially expected / observed value. This is easy to extend to multiple features with more than 2 groups. The weights are then incorporated in loss function of model training.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/responsible_ai/DataBalanceAnalysis_Reweight.png",alt:"Reweighting"})))}m.isMDXComponent=!0}}]);