goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12439__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12440__i = 0, G__12440__a = new Array(arguments.length -  0);
while (G__12440__i < G__12440__a.length) {G__12440__a[G__12440__i] = arguments[G__12440__i + 0]; ++G__12440__i;}
  args = new cljs.core.IndexedSeq(G__12440__a,0);
} 
return G__12439__delegate.call(this,args);};
G__12439.cljs$lang$maxFixedArity = 0;
G__12439.cljs$lang$applyTo = (function (arglist__12441){
var args = cljs.core.seq(arglist__12441);
return G__12439__delegate(args);
});
G__12439.cljs$core$IFn$_invoke$arity$variadic = G__12439__delegate;
return G__12439;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12442__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12443__i = 0, G__12443__a = new Array(arguments.length -  0);
while (G__12443__i < G__12443__a.length) {G__12443__a[G__12443__i] = arguments[G__12443__i + 0]; ++G__12443__i;}
  args = new cljs.core.IndexedSeq(G__12443__a,0);
} 
return G__12442__delegate.call(this,args);};
G__12442.cljs$lang$maxFixedArity = 0;
G__12442.cljs$lang$applyTo = (function (arglist__12444){
var args = cljs.core.seq(arglist__12444);
return G__12442__delegate(args);
});
G__12442.cljs$core$IFn$_invoke$arity$variadic = G__12442__delegate;
return G__12442;
})()
;

return null;
});
