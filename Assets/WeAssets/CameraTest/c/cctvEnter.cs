using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cctvEnter : MonoBehaviour {

    public Camera cctv;
    public Camera main;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.CompareTag("Player"))
        {
            main.depth = 0;
            cctv.depth = 1;
        }
    }
}
