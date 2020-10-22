# computerAPI

# API is deployed on Heroku at: https://floating-brushlands-50137.herokuapp.com/

## Collections within the API

- amdgpus
- amdmobos
- amdprocessors
- casefans
- cases
- cpufansheatsinks
- ddr4rams
- harddiskdrives
- intelmobos
- intelprocessors
- nvidiagpus
- nvmessds
- psus
- satassds
- watercoolings

## Methods used

### Create, Read, and Update (no DELETE) operations used on each of the collection with the following routes

**amdgpus**

- GET /amdgpus (returns all AMD graphic cards)
- GET /amdgpus/:gpuid (returns an array with graphic card associated with the ID)
- PUT /amdgpus/:gpuid (updates graphic card associated with the ID and returns an array)
- POST /amdgpus (add new graphic card to collection)

**amdmobos**

- GET /amdmobos (returns all AMD motherboards)
- GET /amdmobos/:moboid (returns an array with motherboard associated with the ID)
- PUT /amdmobos/:moboid (updates motherboard associated with the ID and returns an array)
- POST /amdmobos (add new motherboard to collection)

**amdprocessors**

- GET /amdprocessors (returns all AMD processors)
- GET /amdprocessors/:procid (returns an array with processors associated with the ID)
- PUT /amdprocessors/:procid (updates processors associated with the ID and returns an array)
- POST /amdprocessors (add new processor to collection)

**casefans**

- GET /casefans (returns all case fans)
- GET /casefans/:casefanid (returns an array with case fans associated with the ID)
- PUT /casefans/:casefanid (updates case fans associated with the ID and returns an array)
- POST /casefans (add new case fan to collection)

**cases**

- GET /cases (returns all cases)
- GET /cases/:caseid (returns an array with cases associated with the ID)
- PUT /cases/:caseid (updates cases associated with the ID and returns an array)
- POST /cases (add new case to collection)

**cpufansheatsinks**

- GET /cpufansheatsinks (returns all CPU fans and heatsinks)
- GET /cpufansheatsinks/:cpufansheatsinkid (returns an array with CPU fans and heatsinks associated with the ID)
- PUT /cpufansheatsinks/:cpufansheatsinkid (updates CPU fans and heatsinks associated with the ID and returns an array)
- POST /cpufansheatsinks (add new CPU fans and heatsink to collection)

**ddr4rams**

- GET /ddr4rams (returns all DDR4 rams)
- GET /ddr4rams/:ddr4ramid (returns an array with DDR4 rams associated with the ID)
- PUT /ddr4rams/:ddr4ramid (updates DDR4 rams associated with the ID and returns an array)
- POST /ddr4rams (add new DDR4 ram to collection)

**harddiskdrives**

- GET /harddiskdrives (returns all hard disk drives)
- GET /harddiskdrives/:harddiskdriveid (returns an array with hard disk drives associated with the ID)
- PUT /harddiskdrives/:harddiskdriveid (updates hard disk drives associated with the ID and returns an array)
- POST /harddiskdrives (add new hard disk drive to collection)

**intelmobos**

- GET /intelmobos (returns all Intel motherboards)
- GET /intelmobos/:intelmoboid (returns an array with Intel motherboards associated with the ID)
- PUT /intelmobos/:intelmoboid (updates Intel motherboards associated with the ID and returns an array)
- POST /intelmobos (add new Intel motherboard to collection)

**intelprocessors**

- GET /intelprocessors (returns all Intel processors)
- GET /intelprocessors/:intelprocessorid (returns an array with Intel processors associated with the ID)
- PUT /intelprocessors/:intelprocessorid (updates Intel processors associated with the ID and returns an array)
- POST /intelprocessors (add new Intel processor to collection)

**nvidiagpus**

- GET /nvidiagpus (returns all Nvidia GPUs)
- GET /nvidiagpus/:nvidiagpuid (returns an array with Nvidia GPUs associated with the ID)
- PUT /nvidiagpus/:nvidiagpuid (updates Nvidia GPUs associated with the ID and returns an array)
- POST /nvidiagpus (add new Nvidia GPU to collection)

**nvmessds**

- GET /nvmessds (returns all Nvme solid state drives)
- GET /nvmessds/:nvmessdid (returns an array with Nvme solid state drives associated with the ID)
- PUT /nvmessds/:nvmessdid (updates Nvme solid state drives associated with the ID and returns an array)
- POST /nvmessds (add new Nvme solid state drive to collection)

**psus**

- GET /psus (returns all power supplies)
- GET /psus/:psuid (returns an array with power supplies associated with the ID)
- PUT /psus/:psuid (updates power supplies associated with the ID and returns an array)
- POST /psus (add new power supply to collection)

**satassds**

- GET /satassds (returns all sata solid state drives)
- GET /satassds/:satassdid (returns an array with sata solid state drives associated with the ID)
- PUT /satassds/:satassdid (updates sata solid state drives associated with the ID and returns an array)
- POST /satassds (add new solid state drive to collection)

**watercoolings**

- GET /watercoolings (returns all water cooling units)
- GET /watercoolings/:watercoolingid (returns an array with water cooling units associated with the ID)
- PUT /watercoolings/:watercoolingid (updates water cooling units associated with the ID and returns an array)
- POST /watercoolings (add new water cooling unit to collection)
