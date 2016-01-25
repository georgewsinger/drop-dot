goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20481__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20482__i = 0, G__20482__a = new Array(arguments.length -  0);
while (G__20482__i < G__20482__a.length) {G__20482__a[G__20482__i] = arguments[G__20482__i + 0]; ++G__20482__i;}
  args = new cljs.core.IndexedSeq(G__20482__a,0);
} 
return G__20481__delegate.call(this,args);};
G__20481.cljs$lang$maxFixedArity = 0;
G__20481.cljs$lang$applyTo = (function (arglist__20483){
var args = cljs.core.seq(arglist__20483);
return G__20481__delegate(args);
});
G__20481.cljs$core$IFn$_invoke$arity$variadic = G__20481__delegate;
return G__20481;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20484__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20485__i = 0, G__20485__a = new Array(arguments.length -  0);
while (G__20485__i < G__20485__a.length) {G__20485__a[G__20485__i] = arguments[G__20485__i + 0]; ++G__20485__i;}
  args = new cljs.core.IndexedSeq(G__20485__a,0);
} 
return G__20484__delegate.call(this,args);};
G__20484.cljs$lang$maxFixedArity = 0;
G__20484.cljs$lang$applyTo = (function (arglist__20486){
var args = cljs.core.seq(arglist__20486);
return G__20484__delegate(args);
});
G__20484.cljs$core$IFn$_invoke$arity$variadic = G__20484__delegate;
return G__20484;
})()
;

return null;
});
