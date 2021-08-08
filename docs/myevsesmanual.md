---
sidebar_position: 7
---

# My EVSE(s) User Manual

## Wizard

### General settings

#### Owner

#### Identifier

It is maximum 6 Base58 characters long. A Base58 character is one of :
```
1 2 3 4 5 6 7 8 9
A B C D E F G H   J K L M N   P Q R S T U V W X Y Z
a b c d e f g h i j k   m n o p q r s t u v w x y z
```
#### Number of EVSES

Each EVSE gets the same settings (except the identifier). Settings specific to an EVSE may be changed in the "Edit Settings" step.

If several EVSEs are declared, the identifier of one EVSE is this identifier followed by its index (between 1 and number of evses) and separated by a space. For example, if the identifier is WNEX and the number of EVSE(s) is 3, then the EVSEs' identifiers are:
* WNEX 1
* WNEX 2
* WNEX 3

#### EVSES Manager Server