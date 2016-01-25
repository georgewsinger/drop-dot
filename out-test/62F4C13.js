goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20979__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20980__i = 0, G__20980__a = new Array(arguments.length -  0);
while (G__20980__i < G__20980__a.length) {G__20980__a[G__20980__i] = arguments[G__20980__i + 0]; ++G__20980__i;}
  args = new cljs.core.IndexedSeq(G__20980__a,0);
} 
return G__20979__delegate.call(this,args);};
G__20979.cljs$lang$maxFixedArity = 0;
G__20979.cljs$lang$applyTo = (function (arglist__20981){
var args = cljs.core.seq(arglist__20981);
return G__20979__delegate(args);
});
G__20979.cljs$core$IFn$_invoke$arity$variadic = G__20979__delegate;
return G__20979;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20982__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20983__i = 0, G__20983__a = new Array(arguments.length -  0);
while (G__20983__i < G__20983__a.length) {G__20983__a[G__20983__i] = arguments[G__20983__i + 0]; ++G__20983__i;}
  args = new cljs.core.IndexedSeq(G__20983__a,0);
} 
return G__20982__delegate.call(this,args);};
G__20982.cljs$lang$maxFixedArity = 0;
G__20982.cljs$lang$applyTo = (function (arglist__20984){
var args = cljs.core.seq(arglist__20984);
return G__20982__delegate(args);
});
G__20982.cljs$core$IFn$_invoke$arity$variadic = G__20982__delegate;
return G__20982;
})()
;

return null;
});
