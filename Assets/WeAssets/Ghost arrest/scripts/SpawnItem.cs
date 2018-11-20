using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnItem : MonoBehaviour {
	
	public Transform[] spawnpoints;
	public float spawntime=5f;
	public GameObject[] Items;

	// Use this for initialization
	void Start () {
		InvokeRepeating ("spawnItems",spawntime,spawntime);
	}
	
	// Update is called once per frame
	void Update () {
		
	}
		
	void spawnItems(){
		int spawnIndex = Random.Range (0, spawnpoints.Length);
		int ItemIndex = Random.Range (0, Items.Length);
		Instantiate(Items[ItemIndex],spawnpoints[spawnIndex].position,spawnpoints[spawnIndex].rotation);
	}
}
