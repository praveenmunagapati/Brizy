#!/usr/bin/env bash

# Deatached head fix.
echo -e "\nGiT Cleanup"
echo -e "-----------------------------------------------------------------------------"
git clean -fd

echo -e "\nCheckout: $1"
echo -e "-----------------------------------------------------------------------------"
git stash
git checkout $1
