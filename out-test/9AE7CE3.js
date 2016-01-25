goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20492__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20493__i = 0, G__20493__a = new Array(arguments.length -  0);
while (G__20493__i < G__20493__a.length) {G__20493__a[G__20493__i] = arguments[G__20493__i + 0]; ++G__20493__i;}
  args = new cljs.core.IndexedSeq(G__20493__a,0);
} 
return G__20492__delegate.call(this,args);};
G__20492.cljs$lang$maxFixedArity = 0;
G__20492.cljs$lang$applyTo = (function (arglist__20494){
var args = cljs.core.seq(arglist__20494);
return G__20492__delegate(args);
});
G__20492.cljs$core$IFn$_invoke$arity$variadic = G__20492__delegate;
return G__20492;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20495__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20496__i = 0, G__20496__a = new Array(arguments.length -  0);
while (G__20496__i < G__20496__a.length) {G__20496__a[G__20496__i] = arguments[G__20496__i + 0]; ++G__20496__i;}
  args = new cljs.core.IndexedSeq(G__20496__a,0);
} 
return G__20495__delegate.call(this,args);};
G__20495.cljs$lang$maxFixedArity = 0;
G__20495.cljs$lang$applyTo = (function (arglist__20497){
var args = cljs.core.seq(arglist__20497);
return G__20495__delegate(args);
});
G__20495.cljs$core$IFn$_invoke$arity$variadic = G__20495__delegate;
return G__20495;
})()
;

return null;
});
