# Airdrop

A helper tool for airdrops it can create UTXO snapshots and distribute coins.

## How to use the Airdrop feature

The airdrop feature has two modes `snapshot` and `distribute`

The Airdrop is considered to be a manual processes so it can be run in debug mode and some changes are applied directly to the code, such places are marked as `Manual:` in the `distribute` class.
To enable the feature in the node builder register the feature itself similar to the bellow example.

```
                var builder = new FullNodeBuilder()
                            .UseNodeSettings(nodeSettings)
                            .UseBlockStore()
                            .UsePosConsensus()
                            .UseColdStakingWallet()
                            .UseApi()
                            .UseMempool()
                            .Airdrop();
```

Then run the node with either of the modes enabled.

```
To build the solution the relevant projects and daemon of the chain
need to be referenced in the Blockcore.Features.Airdrop.sln file 
```

## Snapshot  

Will take a snapshot of the UTXO set of a node and push this to a db to a table name `UnspentOutputs`.
When the snapshot is running no new blocks will get validated (the consensus processes will block).

To start the node in snapshot mode pass in the command arguments `-snapshot -snapshotheight=[height]` not if the node is passed the given height snapshot is ignored, to get the node back to a certain point in time debug the consensus code and manually override the ChainHeader that is the tip (in the future such a flag may be built in to the node). 

Once the snapshot is complete a file named `snapshot-[height].db` will appear in the nodes data folder.

## Distribute  

Will send coins from the local wallet to addresses that have been predefined in the table `DistributeOutputs` in the db this table needs to be populated in advance and it allows to prepare the addresses (and or script) that are going to be airdropped.

A background worker will start and read the entries from the database then send coins to those entries.
Currently the code will only create one trx with 500 outputs (this can be easily changed) and wait for that trx to get confirmed before processing the next batch.

To start the node in snapshot mode pass in the command arguments `-distribute -snapshotheight=[height]` the `snapshotheight` is required to know the db filename.

## Steps how to start

1. Run the airdrop tool on the source node in snapshot mode
2. Copy the database to the target nodes data folder
3. Edit the database and populate the table `DistributeOutputs`
4. Run in airdrop tool on the target node in distribute mode 

## Useful SQL Queries

Group all outputs by address and sum the total value
```
SELECT Address, Script, ScriptType, count(Address), Sum(Value) as Value
FROM UnspentOutputs
WHERE Address != "[address-to-ignore]"
AND Address != "[address-to-ignore]"
GROUP BY Address
ORDER By Sum(Value) DESC
```

The total number of outputs and total value after the grouping
```
SELECT count(*), Sum(Value) FROM (
SELECT Address, Script, ScriptType, count(Address), Sum(Value) as Value
FROM UnspentOutputs
WHERE Address != "[address-to-ignore]"
AND Address != "[address-to-ignore]"
GROUP BY Address
ORDER By Sum(Value) DESC
)
```

Copy entries to the distribution table, this will contain all the addresses to airdrop on
```
INSERT INTO DistributeOutputs (Address, Script, ScriptType, Height, Value)
SELECT Address, Script, ScriptType, 0, Sum(Value) as Value
FROM UnspentOutputs
WHERE Address != "[address-to-ignore]"
AND Address != "[address-to-ignore]"
GROUP BY Address
ORDER By Sum(Value) DESC
```

Follow progress of distribution
```
select status, count(status) FROM DistributeOutputs 
GROUP BY status 
```
Tool recommended to use is `DB browser for SQLite`

