goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__265136__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__265136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__265137__i = 0, G__265137__a = new Array(arguments.length -  0);
while (G__265137__i < G__265137__a.length) {G__265137__a[G__265137__i] = arguments[G__265137__i + 0]; ++G__265137__i;}
  args = new cljs.core.IndexedSeq(G__265137__a,0);
} 
return G__265136__delegate.call(this,args);};
G__265136.cljs$lang$maxFixedArity = 0;
G__265136.cljs$lang$applyTo = (function (arglist__265138){
var args = cljs.core.seq(arglist__265138);
return G__265136__delegate(args);
});
G__265136.cljs$core$IFn$_invoke$arity$variadic = G__265136__delegate;
return G__265136;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__265139__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__265139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__265140__i = 0, G__265140__a = new Array(arguments.length -  0);
while (G__265140__i < G__265140__a.length) {G__265140__a[G__265140__i] = arguments[G__265140__i + 0]; ++G__265140__i;}
  args = new cljs.core.IndexedSeq(G__265140__a,0);
} 
return G__265139__delegate.call(this,args);};
G__265139.cljs$lang$maxFixedArity = 0;
G__265139.cljs$lang$applyTo = (function (arglist__265141){
var args = cljs.core.seq(arglist__265141);
return G__265139__delegate(args);
});
G__265139.cljs$core$IFn$_invoke$arity$variadic = G__265139__delegate;
return G__265139;
})()
;

return null;
});
