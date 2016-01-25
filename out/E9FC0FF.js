goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__277940__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__277940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277941__i = 0, G__277941__a = new Array(arguments.length -  0);
while (G__277941__i < G__277941__a.length) {G__277941__a[G__277941__i] = arguments[G__277941__i + 0]; ++G__277941__i;}
  args = new cljs.core.IndexedSeq(G__277941__a,0);
} 
return G__277940__delegate.call(this,args);};
G__277940.cljs$lang$maxFixedArity = 0;
G__277940.cljs$lang$applyTo = (function (arglist__277942){
var args = cljs.core.seq(arglist__277942);
return G__277940__delegate(args);
});
G__277940.cljs$core$IFn$_invoke$arity$variadic = G__277940__delegate;
return G__277940;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__277943__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__277943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277944__i = 0, G__277944__a = new Array(arguments.length -  0);
while (G__277944__i < G__277944__a.length) {G__277944__a[G__277944__i] = arguments[G__277944__i + 0]; ++G__277944__i;}
  args = new cljs.core.IndexedSeq(G__277944__a,0);
} 
return G__277943__delegate.call(this,args);};
G__277943.cljs$lang$maxFixedArity = 0;
G__277943.cljs$lang$applyTo = (function (arglist__277945){
var args = cljs.core.seq(arglist__277945);
return G__277943__delegate(args);
});
G__277943.cljs$core$IFn$_invoke$arity$variadic = G__277943__delegate;
return G__277943;
})()
;

return null;
});
