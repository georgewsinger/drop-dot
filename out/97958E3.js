goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34421__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34422__i = 0, G__34422__a = new Array(arguments.length -  0);
while (G__34422__i < G__34422__a.length) {G__34422__a[G__34422__i] = arguments[G__34422__i + 0]; ++G__34422__i;}
  args = new cljs.core.IndexedSeq(G__34422__a,0);
} 
return G__34421__delegate.call(this,args);};
G__34421.cljs$lang$maxFixedArity = 0;
G__34421.cljs$lang$applyTo = (function (arglist__34423){
var args = cljs.core.seq(arglist__34423);
return G__34421__delegate(args);
});
G__34421.cljs$core$IFn$_invoke$arity$variadic = G__34421__delegate;
return G__34421;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34424__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34425__i = 0, G__34425__a = new Array(arguments.length -  0);
while (G__34425__i < G__34425__a.length) {G__34425__a[G__34425__i] = arguments[G__34425__i + 0]; ++G__34425__i;}
  args = new cljs.core.IndexedSeq(G__34425__a,0);
} 
return G__34424__delegate.call(this,args);};
G__34424.cljs$lang$maxFixedArity = 0;
G__34424.cljs$lang$applyTo = (function (arglist__34426){
var args = cljs.core.seq(arglist__34426);
return G__34424__delegate(args);
});
G__34424.cljs$core$IFn$_invoke$arity$variadic = G__34424__delegate;
return G__34424;
})()
;

return null;
});
