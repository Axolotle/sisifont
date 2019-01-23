## Python converter

```bash
# from file ('-f' file argument)
python3 sisifont.py -f input.txt

# from string ('-m' message argument)
python3 sisifont.py -m TEST
# from string multiple lines
python3 sisifont.py -m "TEST
SECOND LINE"
# from string multiple lines alternative
python3 sisifont.py -m $'TEST\nSECOND LINE'

# capture output into a file
python3 sisifont.py -f input.txt > output.txt
```
