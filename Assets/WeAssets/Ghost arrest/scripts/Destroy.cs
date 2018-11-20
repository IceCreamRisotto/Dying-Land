using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroy : MonoBehaviour {
	public float destroy_time=5f;
	void Start () {
		Destroy (gameObject, destroy_time);
	}
}
