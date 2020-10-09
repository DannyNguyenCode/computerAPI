# computerAPI

# Once completed, will be deployed to Heroku

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
- PUT
- POST

**amdmobos**

- GET /amdmobos (returns all AMD motherboards)
- GET /amdmobos/:moboid (returns an array with motherboard associated with the ID)
- PUT
- POST

**amdprocessors**

- GET /amdprocessors (returns all AMD processors)
- GET /amdprocessors/:procid (returns an array with processors associated with the ID)
- PUT
- POST

**casefans**

- GET /casefans (returns all case fans)
- GET /casefans/:casefanid (returns an array with case fans associated with the ID)
- PUT
- POST

**cases**

- GET /cases (returns all cases)
- GET /cases/:caseid (returns an array with cases associated with the ID)
- PUT
- POST

**cpufansheatsinks**

- GET /cpufansheatsinks (returns all CPU fans and heatsinks)
- GET /cpufansheatsinks/:cpufansheatsinkid (returns an array with CPU fans and heatsinks associated with the ID)
- PUT
- POST

**ddr4rams**

- GET /ddr4rams (returns all DDR4 rams)
- GET /ddr4rams/:ddr4ramid (returns an array with DDR4 rams associated with the ID)
- PUT
- POST

**harddiskdrives**

- GET /harddiskdrives (returns all hard disk drives)
- GET /harddiskdrives/:harddiskdriveid (returns an array with hard disk drives associated with the ID)
- PUT
- POST

**intelmobos**

- GET /intelmobos (returns all Intel motherboards)
- GET /intelmobos/:intelmoboid (returns an array with Intel motherboards associated with the ID)
- PUT
- POST

**intelprocessors**

- GET /intelprocessors (returns all Intel processors)
- GET /intelprocessors/:intelprocessorid (returns an array with Intel processors associated with the ID)
- PUT
- POST

**nvidiagpus**

- GET /nvidiagpus (returns all Nvidia GPUs)
- GET /nvidiagpus/:nvidiagpuid (returns an array with Nvidia GPUs associated with the ID)
- PUT
- POST

**nvmessds**

- GET /nvmessds (returns all Nvme solid state drives)
- GET /nvmessds/:nvmessdid (returns an array with Nvme solid state drives associated with the ID)
- PUT
- POST

**psus**

- GET /psus (returns all power supplies)
- GET /psus/:psuid (returns an array with power supplies associated with the ID)
- PUT
- POST

**satassds**

- GET /satassds (returns all sata solid state drives)
- GET /satassds/:satassdid (returns an array with sata solid state drives associated with the ID)
- PUT
- POST

**watercoolings**

- GET /watercoolings (returns all water cooling units)
- GET /watercoolings/:watercoolingid (returns an array with water cooling units associated with the ID)
- PUT
- POST
