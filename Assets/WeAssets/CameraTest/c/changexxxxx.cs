using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class changexxxxx : MonoBehaviour {

    void OnTriggerEnter2D(Collider2D co)
    {
        if (co.tag == "Player")
            Application.LoadLevel(1);
    }
}
