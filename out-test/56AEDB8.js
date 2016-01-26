goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14420__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14421__i = 0, G__14421__a = new Array(arguments.length -  0);
while (G__14421__i < G__14421__a.length) {G__14421__a[G__14421__i] = arguments[G__14421__i + 0]; ++G__14421__i;}
  args = new cljs.core.IndexedSeq(G__14421__a,0);
} 
return G__14420__delegate.call(this,args);};
G__14420.cljs$lang$maxFixedArity = 0;
G__14420.cljs$lang$applyTo = (function (arglist__14422){
var args = cljs.core.seq(arglist__14422);
return G__14420__delegate(args);
});
G__14420.cljs$core$IFn$_invoke$arity$variadic = G__14420__delegate;
return G__14420;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14423__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14424__i = 0, G__14424__a = new Array(arguments.length -  0);
while (G__14424__i < G__14424__a.length) {G__14424__a[G__14424__i] = arguments[G__14424__i + 0]; ++G__14424__i;}
  args = new cljs.core.IndexedSeq(G__14424__a,0);
} 
return G__14423__delegate.call(this,args);};
G__14423.cljs$lang$maxFixedArity = 0;
G__14423.cljs$lang$applyTo = (function (arglist__14425){
var args = cljs.core.seq(arglist__14425);
return G__14423__delegate(args);
});
G__14423.cljs$core$IFn$_invoke$arity$variadic = G__14423__delegate;
return G__14423;
})()
;

return null;
});
