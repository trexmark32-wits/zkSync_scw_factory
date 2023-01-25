# zkSync PoC

This is a simple project which tests our zkSync's implementation of Account Abstraction. Please note the following artifacts:

Deployer (Abhik) wallet's address: 0xE61DCBb8B3dcf391B2144DD948738028431A4192
ERC20 address: 0x3869f0Ef70ef326711C53dd2520dB1cFc566E249
Paymaster address: 0xeB4947A417b119B195D9F1DA16453470227cc012

There are also provisions for Account Abstraction Factory deployment and deploying a Multi-sig wallet (Smart contract wallet) in the `contracts` folder of this repo.

*Note*: To use this repo, please remember to create a `.env` file in your project root and add an environment variable called `PRIVATE_KEY`. The private key must be `0x` prefixed. 

*Note*: Private Key obtained from Metamasks need to be prefixed with `0x` before proceeding.