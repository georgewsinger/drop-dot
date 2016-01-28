goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__187284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__187284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__187285__i = 0, G__187285__a = new Array(arguments.length -  0);
while (G__187285__i < G__187285__a.length) {G__187285__a[G__187285__i] = arguments[G__187285__i + 0]; ++G__187285__i;}
  args = new cljs.core.IndexedSeq(G__187285__a,0);
} 
return G__187284__delegate.call(this,args);};
G__187284.cljs$lang$maxFixedArity = 0;
G__187284.cljs$lang$applyTo = (function (arglist__187286){
var args = cljs.core.seq(arglist__187286);
return G__187284__delegate(args);
});
G__187284.cljs$core$IFn$_invoke$arity$variadic = G__187284__delegate;
return G__187284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__187287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__187287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__187288__i = 0, G__187288__a = new Array(arguments.length -  0);
while (G__187288__i < G__187288__a.length) {G__187288__a[G__187288__i] = arguments[G__187288__i + 0]; ++G__187288__i;}
  args = new cljs.core.IndexedSeq(G__187288__a,0);
} 
return G__187287__delegate.call(this,args);};
G__187287.cljs$lang$maxFixedArity = 0;
G__187287.cljs$lang$applyTo = (function (arglist__187289){
var args = cljs.core.seq(arglist__187289);
return G__187287__delegate(args);
});
G__187287.cljs$core$IFn$_invoke$arity$variadic = G__187287__delegate;
return G__187287;
})()
;

return null;
});
