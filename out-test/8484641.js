goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35443__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35444__i = 0, G__35444__a = new Array(arguments.length -  0);
while (G__35444__i < G__35444__a.length) {G__35444__a[G__35444__i] = arguments[G__35444__i + 0]; ++G__35444__i;}
  args = new cljs.core.IndexedSeq(G__35444__a,0);
} 
return G__35443__delegate.call(this,args);};
G__35443.cljs$lang$maxFixedArity = 0;
G__35443.cljs$lang$applyTo = (function (arglist__35445){
var args = cljs.core.seq(arglist__35445);
return G__35443__delegate(args);
});
G__35443.cljs$core$IFn$_invoke$arity$variadic = G__35443__delegate;
return G__35443;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35446__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35447__i = 0, G__35447__a = new Array(arguments.length -  0);
while (G__35447__i < G__35447__a.length) {G__35447__a[G__35447__i] = arguments[G__35447__i + 0]; ++G__35447__i;}
  args = new cljs.core.IndexedSeq(G__35447__a,0);
} 
return G__35446__delegate.call(this,args);};
G__35446.cljs$lang$maxFixedArity = 0;
G__35446.cljs$lang$applyTo = (function (arglist__35448){
var args = cljs.core.seq(arglist__35448);
return G__35446__delegate(args);
});
G__35446.cljs$core$IFn$_invoke$arity$variadic = G__35446__delegate;
return G__35446;
})()
;

return null;
});
