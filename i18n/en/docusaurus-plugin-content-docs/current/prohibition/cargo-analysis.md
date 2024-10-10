---
title: Cargo analysis
---

## Description

Analysis of cargoes for the possibility of movement, taking into account the conditions. The conditions are based on the specified parameters of the **Conditions Search**. In order not to overload the platform with a huge amount of analysis, it is allowed to analyse only one subcategory or when the search results in the register do not exceed 50 cargoes. 

The page **Prohibition. Analysis** of the terms and conditions is divided into two parts: 

![image1](/img/en/prohibition/cargo-analysis/image1.png)

| № | Field | Action |
| :-: | ----- | ----- |
| 1 | **Search** | Enter the required information |
| 2 | **List** | Select the required cargo from the list |
| 3 | **Analysis** | Perform analysis or automatic analysis |

:::info
Fields marked with a red dot are required
:::

## Filters 

The section can only work when selected:

![image2](/img/en/prohibition/cargo-analysis/image2.png)

| № | Search for conditions | Action |
| :-:| --------------------- | ------ |
| 1 | **Country** | Enter the name of the country |
| 2 | **Company** | Select the company name from the drop-down list |
| 3 | **Product** | Select a product from the drop-down list |
| 4 | **Direction** | Specify the direction: <li> Import </li><li> Export </li> |
| 5 | **Country of interaction** | Select from the drop-down list |
| 6 | **Customer Type** | Specify the type of client: <li> Business </li><li> Individual </li> |
| 7 | **Country of cargos origin** | Select the country of origin from the drop-down list |
| 8 | **Invoice Sum** | Specify the amount of the invoice |
| 9 | **Invoice Currency** | Specify the invoice currency |
| 10 | **Shipping weight** | Specify the weight of the shipment |

To view information about the desired cargo, click on the field with the name.

![image3](/img/en/prohibition/cargo-analysis/image3.png)

In the selected cargo card, you can view information about the cargo: 

* **Category**
* **Subcategory**
* **HS code**
* **Keywords**
* **Description**

![image4](/img/en/prohibition/cargo-analysis/image4.png)

## Analysis

To analyse the selected cargo, click on the **Refresh** button icon.

![image5](/img/en/prohibition/cargo-analysis/image5.png)

## Automatic analysis

Automatic analysis means analysing each cargo in the register as soon as it appears. 

:::info
If the analysis takes a long time, it is recommended to disable this function and use the manual analysis
:::

To start **Automatic Analysis**, tick the checkbox and click the **Analyse** button.

![image6](/img/en/prohibition/cargo-analysis/image6.png)


## Analysis designation

The results of each analysis are marked with a different symbol.

![image7](/img/en/prohibition/cargo-analysis/image7.png)

| № | Designation | Description |
| :-: | ----------- | ----------- |
| 1 | **Permitted by exception** | Conditions for this cargo were found. The analysis revealed manual exclusion of some conditions and the final conclusion - permission |
| 2 | **Prohibited by exception** | Conditions for this cargo were found. The analysis revealed manual exclusion of some conditions and the final conclusion - prohibition |
| 3 | **Permission** | The final conclusion of the condition analysis is permission |
| 4 | **Prohibition** | The final conclusion of the condition analysis is prohibition |
| 5 | **Conflict of conditions** | During the analysis, a conflict of two or more conditions was detected. That is, one condition gives permission, and the other prohibits, and these conditions have the same priority |
| 6 | **Analysis in progress** | The platform is analyzing this cargo. The analysis is carried out in order of priority for all cargoes in the list. If the analysis is in this status for a long time, it is better to refresh the page |
| 7 | **Analysis not performed** | During the analysis, a conflict of two or more conditions was detected. That is, one condition gives permission, and the other prohibits, and these conditions have the same priority |

The platform analyses this cargo. The analysis is carried out in a queue for all the goods in the list. 

:::info
If the analysis takes a long time in this status, it is better to refresh the page
:::