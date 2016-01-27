goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78103__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78104__i = 0, G__78104__a = new Array(arguments.length -  0);
while (G__78104__i < G__78104__a.length) {G__78104__a[G__78104__i] = arguments[G__78104__i + 0]; ++G__78104__i;}
  args = new cljs.core.IndexedSeq(G__78104__a,0);
} 
return G__78103__delegate.call(this,args);};
G__78103.cljs$lang$maxFixedArity = 0;
G__78103.cljs$lang$applyTo = (function (arglist__78105){
var args = cljs.core.seq(arglist__78105);
return G__78103__delegate(args);
});
G__78103.cljs$core$IFn$_invoke$arity$variadic = G__78103__delegate;
return G__78103;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78106__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78106 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78107__i = 0, G__78107__a = new Array(arguments.length -  0);
while (G__78107__i < G__78107__a.length) {G__78107__a[G__78107__i] = arguments[G__78107__i + 0]; ++G__78107__i;}
  args = new cljs.core.IndexedSeq(G__78107__a,0);
} 
return G__78106__delegate.call(this,args);};
G__78106.cljs$lang$maxFixedArity = 0;
G__78106.cljs$lang$applyTo = (function (arglist__78108){
var args = cljs.core.seq(arglist__78108);
return G__78106__delegate(args);
});
G__78106.cljs$core$IFn$_invoke$arity$variadic = G__78106__delegate;
return G__78106;
})()
;

return null;
});
