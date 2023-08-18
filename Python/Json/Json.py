import json

class JsonKnowledge:
    def __init__(self) -> None:
        self.JsonPath = 'Json\\db.json'
    def Get(self):
        with open(self.JsonPath, encoding='utf-8') as Archive:
            Data = json.load(Archive)
        return Data['knowledge']
