goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__277962__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__277962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277963__i = 0, G__277963__a = new Array(arguments.length -  0);
while (G__277963__i < G__277963__a.length) {G__277963__a[G__277963__i] = arguments[G__277963__i + 0]; ++G__277963__i;}
  args = new cljs.core.IndexedSeq(G__277963__a,0);
} 
return G__277962__delegate.call(this,args);};
G__277962.cljs$lang$maxFixedArity = 0;
G__277962.cljs$lang$applyTo = (function (arglist__277964){
var args = cljs.core.seq(arglist__277964);
return G__277962__delegate(args);
});
G__277962.cljs$core$IFn$_invoke$arity$variadic = G__277962__delegate;
return G__277962;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__277965__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__277965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277966__i = 0, G__277966__a = new Array(arguments.length -  0);
while (G__277966__i < G__277966__a.length) {G__277966__a[G__277966__i] = arguments[G__277966__i + 0]; ++G__277966__i;}
  args = new cljs.core.IndexedSeq(G__277966__a,0);
} 
return G__277965__delegate.call(this,args);};
G__277965.cljs$lang$maxFixedArity = 0;
G__277965.cljs$lang$applyTo = (function (arglist__277967){
var args = cljs.core.seq(arglist__277967);
return G__277965__delegate(args);
});
G__277965.cljs$core$IFn$_invoke$arity$variadic = G__277965__delegate;
return G__277965;
})()
;

return null;
});
