goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13664__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13665__i = 0, G__13665__a = new Array(arguments.length -  0);
while (G__13665__i < G__13665__a.length) {G__13665__a[G__13665__i] = arguments[G__13665__i + 0]; ++G__13665__i;}
  args = new cljs.core.IndexedSeq(G__13665__a,0);
} 
return G__13664__delegate.call(this,args);};
G__13664.cljs$lang$maxFixedArity = 0;
G__13664.cljs$lang$applyTo = (function (arglist__13666){
var args = cljs.core.seq(arglist__13666);
return G__13664__delegate(args);
});
G__13664.cljs$core$IFn$_invoke$arity$variadic = G__13664__delegate;
return G__13664;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13667__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13668__i = 0, G__13668__a = new Array(arguments.length -  0);
while (G__13668__i < G__13668__a.length) {G__13668__a[G__13668__i] = arguments[G__13668__i + 0]; ++G__13668__i;}
  args = new cljs.core.IndexedSeq(G__13668__a,0);
} 
return G__13667__delegate.call(this,args);};
G__13667.cljs$lang$maxFixedArity = 0;
G__13667.cljs$lang$applyTo = (function (arglist__13669){
var args = cljs.core.seq(arglist__13669);
return G__13667__delegate(args);
});
G__13667.cljs$core$IFn$_invoke$arity$variadic = G__13667__delegate;
return G__13667;
})()
;

return null;
});
